
import os, sqlite3, re, secrets
from datetime import datetime
from functools import wraps
import click
from flask import Flask, render_template, request, redirect, url_for, flash, session, g, abort
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "CHANGE-THIS-SECRET-BEFORE-DEPLOYMENT")
app.config["JETS_CLUB_URL"] = os.environ.get("JETS_CLUB_URL", "https://daarul-uluum-jets-club.onrender.com/")
DB = os.environ.get("DATABASE_PATH", os.path.join(os.path.dirname(__file__), "school.db"))
os.makedirs(os.path.dirname(DB) or ".", exist_ok=True)
ADMIN_EMAIL = "daarululuum2026@gmail.com"

def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DB)
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(error=None):
    conn = g.pop("db", None)
    if conn: conn.close()

def init_db():
    get_db().execute("""CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE COLLATE NOCASE, phone TEXT NOT NULL,
      role TEXT NOT NULL CHECK(role IN ('admin','teacher','parent','student')),
      reference_number TEXT DEFAULT '', password_hash TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','active','rejected','inactive')),
      created_at TEXT NOT NULL, reviewed_at TEXT)""")
    get_db().commit()

with app.app_context():
    init_db()

@app.before_request
def csrf_setup():
    if "csrf" not in session: session["csrf"] = secrets.token_hex(24)

def check_csrf():
    if request.form.get("csrf") != session.get("csrf"):
        abort(400, "Form expired. Refresh and try again.")

@app.context_processor
def shared_values():
    return {"csrf": session.get("csrf", ""), "jets_club_url": app.config["JETS_CLUB_URL"]}

def login_required(fn):
    @wraps(fn)
    def wrapped(*args, **kwargs):
        if not session.get("user_id"):
            flash("Please sign in first.", "warning")
            return redirect(url_for("signin"))
        return fn(*args, **kwargs)
    return wrapped

def admin_required(fn):
    @wraps(fn)
    def wrapped(*args, **kwargs):
        if session.get("role") != "admin": abort(403)
        return fn(*args, **kwargs)
    return wrapped

PAGE_DATA = {
    "about": ("Our Story, Vision & Mission", "Daarul Uluum Lil Atfaal School is committed to a balanced educational experience that values Western and Islamic knowledge. Our aim is to help learners build strong foundations, develop good character and prepare confidently for the future."),
    "academics": ("Our Academic Programmes", "Creche, Nursery, Primary, Junior Secondary, Senior Secondary and Islamic Education. Each stage supports learners as they grow in knowledge, confidence and character."),
    "admissions": ("Admissions", "For current fees, age requirements, documents, available classes and admission dates, contact or visit the school for verified information."),
    "facilities": ("Our Facilities", "Spaces and resources that support learning, wellbeing and discovery."),
    "gallery": ("Gallery", "Add photographs of buildings, classrooms, laboratories, books, school projects and learning environments. Portrait photographs are not necessary."),
    "news": ("News & Updates", "Official announcements, term dates, events and school news will be published here after confirmation by the school administration."),
    "faq": ("Frequently Asked Questions", "New portal accounts are reviewed by the administrator. Applicants can sign in after approval. School address: 2, Ejoyin Abobatale Street, Behind Rahmat Mosque, Baba Oba, Idimu, Lagos State."),
    "contact": ("Contact Us", "2, Ejoyin Abobatale Street, Behind Rahmat Mosque, Baba Oba, Idimu, Lagos State."),
    "jets-club": ("School Jets Club", "A space for practical learning, science, technology, creativity, teamwork and student projects.")
}

@app.route("/")
def home():
    return render_template("index.html", title="Home")

@app.route("/<page>")
def page(page):
    if page not in PAGE_DATA: abort(404)
    return render_template("page.html", title=PAGE_DATA[page][0], page=page, heading=PAGE_DATA[page][0], description=PAGE_DATA[page][1])

@app.route("/create-account", methods=["GET", "POST"])
def create_account():
    if request.method == "POST":
        check_csrf()
        name = request.form.get("full_name", "").strip()
        email = request.form.get("email", "").strip().lower()
        phone = request.form.get("phone", "").strip()
        role = request.form.get("role", "")
        ref = request.form.get("reference_number", "").strip()
        password = request.form.get("password", "")
        if not name or not phone or not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email) or role not in ("teacher", "parent", "student"):
            flash("Complete the required fields and enter a valid email.", "error")
        elif email == ADMIN_EMAIL:
            flash("This email is reserved for the administrator.", "error")
        elif len(password) < 10:
            flash("Password must contain at least 10 characters.", "error")
        elif password != request.form.get("confirm_password", ""):
            flash("Passwords do not match.", "error")
        else:
            try:
                get_db().execute("""INSERT INTO users(full_name,email,phone,role,reference_number,password_hash,status,created_at)
                    VALUES(?,?,?,?,?,?,'pending',?)""",
                    (name, email, phone, role, ref, generate_password_hash(password), datetime.utcnow().isoformat(timespec="seconds")))
                get_db().commit()
                flash("Application submitted. Your account is pending administrator approval.", "success")
                return redirect(url_for("signin"))
            except sqlite3.IntegrityError:
                flash("An account with this email already exists.", "error")
    return render_template("create_account.html", title="Create Portal Account")

@app.route("/signin", methods=["GET", "POST"])
def signin():
    if request.method == "POST":
        check_csrf()
        email = request.form.get("email", "").strip().lower()
        user = get_db().execute("SELECT * FROM users WHERE email=?", (email,)).fetchone()
        if not user or not check_password_hash(user["password_hash"], request.form.get("password", "")):
            flash("Email or password is incorrect.", "error")
        elif user["status"] == "pending":
            flash("Your account is awaiting administrator approval.", "warning")
        elif user["status"] != "active":
            flash("This account is not active. Contact the school.", "warning")
        else:
            session.clear()
            session.update(user_id=user["id"], full_name=user["full_name"], email=user["email"], role=user["role"])
            return redirect(url_for("admin") if user["role"] == "admin" else url_for("portal"))
    return render_template("signin.html", title="Portal Sign In")

@app.route("/portal")
@login_required
def portal():
    return render_template("portal.html", title="My Portal")

@app.route("/logout", methods=["POST"])
@login_required
def logout():
    check_csrf()
    session.clear()
    flash("You have signed out.", "success")
    return redirect(url_for("home"))

@app.route("/admin")
@admin_required
def admin():
    q = request.args.get("q", "").strip()
    status = request.args.get("status", "")
    role = request.args.get("role", "")
    sql = "SELECT * FROM users WHERE role!='admin'"
    args = []
    if q:
        sql += " AND (full_name LIKE ? OR email LIKE ? OR phone LIKE ? OR reference_number LIKE ?)"
        args += [f"%{q}%"] * 4
    if status in ("pending", "active", "rejected", "inactive"):
        sql += " AND status=?"; args.append(status)
    if role in ("teacher", "parent", "student"):
        sql += " AND role=?"; args.append(role)
    sql += " ORDER BY CASE status WHEN 'pending' THEN 0 ELSE 1 END, created_at DESC"
    users = get_db().execute(sql, args).fetchall()
    counts = {s: get_db().execute("SELECT COUNT(*) FROM users WHERE status=? AND role!='admin'", (s,)).fetchone()[0] for s in ("pending", "active")}
    counts["total"] = get_db().execute("SELECT COUNT(*) FROM users WHERE role!='admin'").fetchone()[0]
    return render_template("admin.html", title="Admin Dashboard", users=users, counts=counts, q=q, status=status, role=role)

@app.route("/admin/user/<int:uid>/<action>", methods=["POST"])
@admin_required
def review(uid, action):
    check_csrf()
    mapping = {"approve": "active", "activate": "active", "reject": "rejected", "deactivate": "inactive"}
    if action not in mapping: abort(404)
    user = get_db().execute("SELECT * FROM users WHERE id=? AND role!='admin'", (uid,)).fetchone()
    if not user: abort(404)
    get_db().execute("UPDATE users SET status=?, reviewed_at=? WHERE id=?",
                     (mapping[action], datetime.utcnow().isoformat(timespec="seconds"), uid))
    get_db().commit()
    flash(f"{user['full_name']} is now {mapping[action]}.", "success")
    return redirect(url_for("admin"))

@app.cli.command("create-admin")
def create_admin():
    """Create or reset the authorised school administrator."""
    name = click.prompt("Administrator full name")
    password = click.prompt("Create admin password (minimum 10 characters)", hide_input=True, confirmation_prompt=True)
    if len(password) < 10: raise click.ClickException("Password must be at least 10 characters.")
    existing = get_db().execute("SELECT id FROM users WHERE email=?", (ADMIN_EMAIL,)).fetchone()
    if existing:
        get_db().execute("UPDATE users SET full_name=?,password_hash=?,role='admin',status='active' WHERE email=?",
                         (name, generate_password_hash(password), ADMIN_EMAIL))
    else:
        get_db().execute("""INSERT INTO users(full_name,email,phone,role,password_hash,status,created_at)
          VALUES(?,?,?,'admin',?,'active',?)""",
          (name, ADMIN_EMAIL, "", generate_password_hash(password), datetime.utcnow().isoformat(timespec="seconds")))
    get_db().commit()
    click.echo("Administrator account ready: " + ADMIN_EMAIL)

if __name__ == "__main__":
    app.run(debug=True)
