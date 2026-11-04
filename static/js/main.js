
(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
if($("#year"))$("#year").textContent=new Date().getFullYear();
$(".theme-toggle")?.addEventListener("click",()=>{let t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t;try{localStorage.setItem("school-theme",t)}catch(e){}});
const T={en:{navHome:"Home",navAbout:"About",navAcademics:"Academics",navAdmissions:"Admissions",navFacilities:"Facilities",navGallery:"Gallery",navNews:"News",navFaq:"FAQ",navContact:"Contact",signIn:"Sign In",createAccount:"Create Account",ticker1:"Western & Islamic Education",ticker2:"Connecting Faith and Knowledge for a Brighter Future.",welcome:"WELCOME TO OUR SCHOOL",intro:"Education that nurtures the whole child.",introtext:"Daarul Uluum Lil Atfaal School brings Western and Islamic education together in a supportive environment where learners develop knowledge, values and practical skills.",eyebrow:"A place to learn, grow and belong",hero1:"Building bright minds with faith and knowledge.",hero2:"Where every stage opens a new possibility.",hero3:"Preparing learners for a brighter future.",herotext1:"A balanced learning journey that nurtures academic excellence, strong character and confidence.",herotext2:"From early years to senior secondary, we support every learner's next step.",herotext3:"Encouraging curiosity, responsibility, creativity and lifelong learning.",motto:"Connecting Faith and Knowledge for a Brighter Future."},ar:{navHome:"الرئيسية",navAbout:"من نحن",navAcademics:"الدراسة",navAdmissions:"القبول",navFacilities:"المرافق",navGallery:"معرض الصور",navNews:"الأخبار",navFaq:"الأسئلة الشائعة",navContact:"اتصل بنا",signIn:"تسجيل الدخول",createAccount:"إنشاء حساب",ticker1:"التعليم الغربي والإسلامي",ticker2:"نربط الإيمان بالعلم من أجل مستقبل أكثر إشراقاً.",welcome:"مرحباً بكم في مدرستنا",intro:"تعليم يرعى نمو الطفل بكل جوانبه.",introtext:"تجمع مدرسة دار العلوم للأطفال بين التعليم الغربي والإسلامي في بيئة داعمة تنمي المعرفة والقيم والمهارات العملية.",eyebrow:"مكان للتعلم والنمو والانتماء",hero1:"نبني عقولاً مشرقة بالإيمان والمعرفة.",hero2:"كل مرحلة تفتح آفاقاً جديدة.",hero3:"نُعد المتعلمين لمستقبل أكثر إشراقاً.",herotext1:"رحلة تعليمية متوازنة تعزز التفوق الأكاديمي والأخلاق والثقة بالنفس.",herotext2:"من السنوات الأولى إلى المرحلة الثانوية، ندعم خطوات كل متعلم.",herotext3:"نشجع الفضول والمسؤولية والإبداع والتعلم مدى الحياة.",motto:"نربط الإيمان بالعلم من أجل مستقبل أكثر إشراقاً."}};
Object.assign(T.en,{quickLinks:"Quick Links",portals:"Portals",findUs:"Find Us",openMap:"Open map ↗",portalSignIn:"Sign in to your account",emailAddress:"Email address",password:"Password",keepPrivate:"Keep your password private",signInSecurely:"Sign In Securely",createPortalAccount:"Create a Portal Account",fullName:"Full name",phoneNumber:"Phone number",accountType:"Account type",selectAccountType:"Select account type",teacher:"Teacher",parent:"Parent",student:"Student",schoolIdOptional:"Admission number / Staff ID (optional)",confirmPassword:"Confirm password",submitRegistration:"Submit Registration",adminDashboard:"Administrator Dashboard",signOut:"Sign Out",pendingApplications:"Pending applications",activeAccounts:"Active accounts",totalApplications:"Total applications",accountManagement:"Account Management"});
Object.assign(T.ar,{quickLinks:"روابط سريعة",portals:"البوابات",findUs:"موقعنا",openMap:"افتح الخريطة ↗",portalSignIn:"تسجيل الدخول إلى حسابك",emailAddress:"البريد الإلكتروني",password:"كلمة المرور",keepPrivate:"حافظ على سرية كلمة المرور",signInSecurely:"تسجيل الدخول بأمان",createPortalAccount:"إنشاء حساب للبوابة",fullName:"الاسم الكامل",phoneNumber:"رقم الهاتف",accountType:"نوع الحساب",selectAccountType:"اختر نوع الحساب",teacher:"معلم",parent:"ولي أمر",student:"طالب",schoolIdOptional:"رقم القبول / رقم الموظف (اختياري)",confirmPassword:"تأكيد كلمة المرور",submitRegistration:"إرسال التسجيل",adminDashboard:"لوحة تحكم المسؤول",signOut:"تسجيل الخروج",pendingApplications:"الطلبات قيد المراجعة",activeAccounts:"الحسابات النشطة",totalApplications:"إجمالي الطلبات",accountManagement:"إدارة الحسابات"});
const textArabic={
"Explore Admissions":"اكتشف القبول","Discover Our School":"اكتشف مدرستنا","Read Our Story ↗":"اقرأ قصتنا ↗",
"OUR PROGRAMMES":"برامجنا","A learning journey, stage by stage.":"رحلة تعليمية، مرحلة بعد مرحلة.",
"Learning experiences designed to support each stage of a child's development.":"خبرات تعليمية تدعم كل مرحلة من مراحل نمو الطفل.",
"Creche":"الحضانة","Nursery":"الروضة","Primary":"المرحلة الابتدائية","Secondary":"المرحلة الثانوية",
"Early childhood care, discovery and development.":"رعاية الطفولة المبكرة والاكتشاف والنمو.",
"A foundation for curiosity, confidence and early learning.":"أساس للفضول والثقة والتعلم المبكر.",
"Building essential knowledge and learning skills.":"بناء المعرفة الأساسية ومهارات التعلم.",
"Supporting academic development and future pathways.":"دعم التطور الأكاديمي والمسارات المستقبلية.",
"WHY FAMILIES CHOOSE US":"لماذا تختارنا الأسر","A balanced foundation for life.":"أساس متوازن للحياة.",
"We value strong learning habits, good character and an environment where every child is encouraged to make progress.":"نقدر عادات التعلم الجيدة والأخلاق الحسنة والبيئة التي تشجع كل طفل على التقدم.",
"Integrated Education":"تعليم متكامل","Character and Discipline":"الأخلاق والانضباط","Learning for Tomorrow":"التعلم من أجل الغد",
"Western and Islamic learning are valued as connected parts of a complete education.":"نقدر التعليم الغربي والإسلامي باعتبارهما جزأين متكاملين من التعليم الشامل.",
"Respect, responsibility, compassion and consistency guide our school culture.":"توجه قيم الاحترام والمسؤولية والرحمة والثبات ثقافة مدرستنا.",
"We encourage curiosity, creativity, communication and practical problem-solving.":"نشجع الفضول والإبداع والتواصل وحل المشكلات عملياً.",
"More About Us":"المزيد عنا","VISIT OUR SCHOOL":"زوروا مدرستنا","Find our location.":"اعثر على موقعنا.",
"Our Vision":"رؤيتنا","Our Mission":"رسالتنا","Our Core Values":"قيمنا الأساسية",
"Excellence":"التميز","Faith":"الإيمان","Discipline":"الانضباط","Compassion":"الرحمة",
"We hold high academic standards for every student, at every stage.":"نحافظ على معايير أكاديمية عالية لكل طالب في كل مرحلة.",
"Islamic values are woven into daily school life, not taught in isolation.":"تندمج القيم الإسلامية في الحياة المدرسية اليومية ولا تُدرس بمعزل عنها.",
"Structure and consistency give students the foundation to thrive.":"يوفر النظام والاستمرارية للطلاب أساساً للنجاح.",
"Every child is known, cared for, and supported as an individual.":"كل طفل معروف ومحل اهتمام ويحظى بالدعم كفرد.",
"Physics Lab":"مختبر الفيزياء","Chemistry Lab":"مختبر الكيمياء","Biology Lab":"مختبر الأحياء",
"Computer Lab":"مختبر الحاسوب","Sports Facilities":"المرافق الرياضية","Prayer Hall":"مصلى المدرسة","School Bus":"حافلة المدرسة",
"Fully equipped for hands-on experiments and demonstrations.":"مجهز بالكامل للتجارب العملية والعروض التوضيحية.",
"Safe, modern space for practical chemistry lessons.":"مساحة آمنة وحديثة لدروس الكيمياء العملية.",
"Equipped for microscopy, dissection, and life-science study.":"مجهز للمجاهر والتشريح ودراسة علوم الحياة.",
"Modern workstations for ICT and digital literacy classes.":"أجهزة حديثة لدروس تقنية المعلومات والمهارات الرقمية.",
"Fields and courts supporting a range of sports and games.":"ملاعب وساحات لمجموعة متنوعة من الرياضات والألعاب.",
"A dedicated space for daily prayers and Islamic gatherings.":"مكان مخصص للصلوات اليومية واللقاءات الإسلامية.",
"Safe, supervised transportation on select routes.":"نقل آمن وتحت الإشراف في مسارات محددة.",
"School Jets Club":"نادي جِتس المدرسي","Think, create, test and improve.":"فكر وابتكر واختبر وطوّر.",
"Create Portal Account":"إنشاء حساب للبوابة","Portal Sign In":"تسجيل الدخول إلى البوابة",
"Full name":"الاسم الكامل","Email address":"البريد الإلكتروني","Phone number":"رقم الهاتف",
"Account type":"نوع الحساب","Teacher":"معلم","Parent":"ولي أمر","Student":"طالب",
"Submit Registration":"إرسال التسجيل","Confirm password":"تأكيد كلمة المرور",
"Administrator Dashboard":"لوحة تحكم المسؤول","Pending applications":"الطلبات قيد المراجعة",
"Active accounts":"الحسابات النشطة","Total applications":"إجمالي الطلبات",
"Approve":"موافقة","Reject":"رفض","Deactivate":"تعطيل","Activate":"تفعيل",
"Find Us":"موقعنا","Quick Links":"روابط سريعة","Portals":"البوابات","Open map ↗":"افتح الخريطة ↗"
};
const originalText=new WeakMap();
const attributeTranslations={"name@example.com":"البريد الإلكتروني","Enter your password":"أدخل كلمة المرور","Name, email, phone or ID":"الاسم أو البريد أو الهاتف أو الرقم","All statuses":"كل الحالات","All roles":"كل الأدوار","Search":"بحث","Status":"الحالة","Account type":"نوع الحساب"};
Object.assign(textArabic,{"WELCOME BACK":"مرحباً بعودتك","DAARUL ULUUM LIL ATFAAL SCHOOL":"مدرسة دار العلوم للأطفال","Learning with purpose. Growing with values.":"نتعلم بهدف وننمو بالقيم.","One secure place for teachers, parents and students to access the school portal.":"مكان آمن للمعلمين وأولياء الأمور والطلاب للوصول إلى بوابة المدرسة.","Connecting Faith and Knowledge for a Brighter Future.":"نربط الإيمان بالعلم من أجل مستقبل أكثر إشراقاً.","SCHOOL PORTAL":"بوابة المدرسة","Use the email address and password registered with the school.":"استخدم البريد الإلكتروني وكلمة المرور المسجلين لدى المدرسة.","NEW TO THE PORTAL?":"هل أنت جديد في البوابة؟","New accounts are reviewed by the school administrator before access is enabled.":"يراجع مسؤول المدرسة الحسابات الجديدة قبل تفعيل الوصول.","Your application will remain pending until approved. Use a password you have not used for your email account.":"سيظل طلبك قيد المراجعة حتى تتم الموافقة عليه. استخدم كلمة مرور مختلفة عن كلمة مرور بريدك الإلكتروني.","Already have an account?":"لديك حساب بالفعل؟","SCHOOL MANAGEMENT":"إدارة المدرسة","Welcome back, ":"مرحباً بعودتك، ","Manage school portal access from here.":"يمكنك إدارة الوصول إلى بوابة المدرسة من هنا.","Awaiting your review":"بانتظار مراجعتك","Approved portal users":"مستخدمو البوابة المعتمدون","All non-admin accounts":"جميع الحسابات باستثناء المسؤول","Search applications, filter by role or status, and manage access.":"ابحث عن الطلبات وصفّها حسب الدور أو الحالة وأدر صلاحيات الوصول.","Apply filters":"تطبيق عوامل التصفية","Reset":"إعادة ضبط","Applicant":"مقدم الطلب","Account type":"نوع الحساب","Date submitted":"تاريخ التقديم","Actions":"الإجراءات","Your portal is ready":"بوابتك جاهزة","There are no teacher, parent or student accounts yet. When someone submits a portal registration, their application will appear here for your review.":"لا توجد حسابات للمعلمين أو أولياء الأمور أو الطلاب حتى الآن. عند تقديم طلب تسجيل، سيظهر هنا لمراجعته.","No matching applications":"لا توجد طلبات مطابقة","Try changing your search or filters to see more applications.":"جرّب تغيير البحث أو عوامل التصفية لعرض طلبات أخرى.","For security, administrator accounts are managed separately from public portal registrations.":"لأسباب أمنية، تُدار حسابات المسؤولين بشكل منفصل عن التسجيل العام للبوابة."});
function language(l){
 document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
 $$('[data-i18n]').forEach(e=>{const k=e.dataset.i18n;if(T[l][k])e.textContent=T[l][k];});
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){
   if(!originalText.has(node))originalText.set(node,node.nodeValue);
   const raw=originalText.get(node), trimmed=raw.trim();if(!trimmed)continue;
   let translated=raw;
   if(l==="ar" && textArabic[trimmed])translated=raw.replace(trimmed,textArabic[trimmed]);
   else if(l==="en"){const english=Object.keys(textArabic).find(k=>textArabic[k]===trimmed);if(english)translated=raw.replace(trimmed,english);}
   node.nodeValue=translated;
 }
 $$('input[placeholder],select option').forEach(el=>{if(!el.dataset.originalPlaceholder)el.dataset.originalPlaceholder=el.getAttribute('placeholder')||el.textContent;const base=el.dataset.originalPlaceholder;if(l==='ar'&&attributeTranslations[base]){if(el.tagName==='OPTION')el.textContent=attributeTranslations[base];else el.setAttribute('placeholder',attributeTranslations[base]);}else if(l==='en'){if(el.tagName==='OPTION')el.textContent=base;else el.setAttribute('placeholder',base);}});
 const toggle=$('.language-toggle');if(toggle)toggle.textContent=l==="ar"?"English":"العربية";
 try{localStorage.setItem("school-language",l)}catch(e){}
}
let l="en";try{l=localStorage.getItem("school-language")||"en"}catch(e){}language(l);$(".language-toggle")?.addEventListener("click",()=>language(document.documentElement.lang==="ar"?"en":"ar"));
$(".mobile-menu")?.addEventListener("click",()=>{const nav=$(".main-nav"),btn=$(".mobile-menu");nav?.classList.toggle("open");btn?.setAttribute("aria-expanded",nav?.classList.contains("open")?"true":"false")});
$(".password-toggle")?.addEventListener("click",()=>{const input=$("#password"),btn=$(".password-toggle");if(!input)return;const show=input.type==="password";input.type=show?"text":"password";btn.textContent=show?"Hide":"Show";btn.setAttribute("aria-label",show?"Hide password":"Show password")});
let slides=$$(".slide"),dots=$$(".dots button"),idx=0,timer;function show(n){if(!slides.length)return;idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===idx));dots.forEach((d,i)=>d.classList.toggle("active",i===idx))}function restart(){clearInterval(timer);timer=setInterval(()=>show(idx+1),6500)}$(".next")?.addEventListener("click",()=>{show(idx+1);restart()});$(".prev")?.addEventListener("click",()=>{show(idx-1);restart()});dots.forEach((d,i)=>d.addEventListener("click",()=>{show(i);restart()}));restart();
if("IntersectionObserver"in window){let ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");ob.unobserve(e.target)}}),{threshold:.12});$$(".reveal").forEach(e=>ob.observe(e))}else $$(".reveal").forEach(e=>e.classList.add("shown"));
let top=$(".back-top");window.addEventListener("scroll",()=>top?.classList.toggle("visible",scrollY>400),{passive:true});top?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
})();
