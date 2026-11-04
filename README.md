# Daarul Uluum Lil Atfaal School Website

## Local development (Windows)
```powershell
py -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe -m flask --app app create-admin
.\venv\Scripts\python.exe -m flask --app app run --debug
```
Open http://127.0.0.1:5000.

## Deploy on Render
Create a **Web Service** from this project folder/repository.
- Runtime: Python 3
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`

Add these environment variables in Render:
- `SECRET_KEY`: a long random secret (generate locally with `python -c "import secrets; print(secrets.token_hex(32))"`).
- `DATABASE_PATH`: `/var/data/school.db`
- `JETS_CLUB_URL`: `https://daarul-uluum-jets-club.onrender.com/`

Add a **persistent disk** to the Render service, mount path `/var/data`, with enough storage for the school's records. The database is stored at `/var/data/school.db`; without a persistent disk, SQLite data may be lost on redeploy/restart.

### Create the first admin account
After the first deployment, open Render Shell for the service and run:
`flask --app app create-admin`
Use the authorised email `daarululuum2026@gmail.com` when signing in. Keep the password private. Do not share it.

If Render Shell is unavailable on your plan, tell me before trying to create the admin remotely; use a secure one-time setup method rather than putting a password in source code or a public environment variable.

## Existing database
If you have an existing `school.db`, back it up before deployment. It must be copied to the persistent disk location for existing accounts to be retained.
