const theoryQuestions = [
            {
     question:" جميع المتغيرات في لغة البرمجة <bdi>PHP</bdi> تبدأ برمز؟ ",
     options: ["&","/*","$","!"],
     correct:2,
    explanation:"في لغة <bdi>PHP</bdi> اي متغير يبدأ بالرمز <bdi>$</bdi> دائماً"
    },
    {
        question: "لربط جدولين لاسترجاع القيم منها نستخدم الكلمة الرئيسية",
        options: ["Group By", "Order By", "Where", "Join"],
        correct: 3,
        explanation: "  تُستخدم لدمج صفوف من جدولين أو أكثر بناءً على عمود مشترك بينهما JOIN"
    },
    {
        question: "أداة تمكن المستخدم من عرض مجموعة عناصر على شكل قائمة ",
        options: ["ListBox", "CheckBox", "Label", "TextBox"],
        correct: 0,
        explanation:  "هي عنصر تحكم في واجهات المستخدم التي تسمح للمستخدم بعرض قائمة من العناصر ListBox  "
    },
     {
        question:"ماهي الدالة التي تستخدم لايجاد اعلى قيمة في عمود من جدول قاعدة بيانات اوراكل",
        options: [" AVG", "MAX ", "SUM", "MIN"],
        correct: 1,
        explanation:" تعني اعلى قيمة MAX"
    },
    {
     question:"ماهي الكلمة المحجوزة التي يتم استخدامها لتمثيل القيم الفارغة في جداول قاعدة البيانات"  ,
     options:["Empty","select","form","where"],
     correct:0 ,
      explanation:" تعني ان القيمة فارغة Empty"
    },
     {
     question:"تعد العلاقة بين المتدرب ورقم السجل المدني من نوع "  ,
     options:["واحد لمتعدد","علاقة ثنائية","متعدد لمتعدد","واحد لواحد"],
     correct:3 ,
      explanation:"لكل متدرب رقم سجل مدني فريد والعكس صحيح"
    },
    {
     question:"المفتاح الاجنبي هو صفة تشير الى مفتاح رئيس في جدول اخر؟"  ,
     options:["صح","خطأ"],
     correct:0 ,
      explanation:"الغرض منه انشاء علاقة"
    },
    {
     question:" True or false من انواع البيانات التي تعبر عن القيمة المنطقية "  ,
     options:["Float","Double","int","Boolean"],
     correct:3 ,
      explanation:"هو نوع بيانات يستخدم لتمثيل قيمتين فقط اما صحيح او خاطئ"
    },
     {
     question:" index=0 أول عنصر في المصفوفة يكون "  ,
     options:["صح","خطأ"],
     correct:0 ,
      explanation:"العنصر الاول في الصفوفة يكون 0"
    },
    {
     question: " PHP الطريقة السليمة لانهاء سطر الاوامر في لغة البرمجة ",
     options: [";","/","<","{"],
     correct:0,
     explanation:" ; لايمكن استخدام اي رمز اخر غير "
    },
      {
     question: " لغة برمجية مفسرة تستخدم في تطبيقات الويب والعمل على جانب الخادم وليس على جانب المستخدم اي هي خاصة بالمواقع الديناميكية ",
     options: ["PHP","JAVA","HTML","CSS"],
     correct:0,
     explanation:"نعم هي لغة برمجية تنفذ على جانب الخادم فقط"
    },
     {
     question: "لكتابة عنوان يشمل أرقام ونصوص يعرف المتغير من نوع",
     options: ["Double","String","Long","Boolean"],
     correct:1,
     explanation:" يمكن استخدامه لتخزين نصوص مثل لعناوين التي قد تحتوي على ارقام ونصوص مختلفةstring"
    },
     {
     question: "ماهو البرتوكول المستخدم للوصول لصفحات وخدمات الويب",
     options: ["DNS","SMTP","FTP","HTTP"],
     correct:3,
     explanation:" البروتكول الاساسي لنقل البيانات بين المستعرض والخادم HTTP"
    },
     {
     question: "لترتيب البيانات الناتجة من الاستعلام تصاعديا أو تنازليا نستخدم ",
     options: ["orderby and groupby","ASC and DESC","high and low","up and down"],
     correct:1,
     explanation:"هما المسؤولين عن الترتيب ASC and DESC"
     },
     {
     question:"(AND,OR,XOR,NOT) تسمى المعاملات ",
     options: ["معاملات منطقية ","معاملات حسابية","معاملات علائقية","معاملات حسابية ثنائية"],
     correct:0,
     explanation:"تستخدم في الشروط المنطقية"
     },
        {
    question:"يتم تمثيل الجداول في نموذج الكيانات والعلاقات ER على شكل",
    options: ["بيضاوي","مستطيل","معين","خط مستقيم"],
     correct:1,
    explanation:"تستخدم شكل مستطيل"
    },
        {
     question:"في لغة البرمجة <bdi>Java</bdi> المتغيرات التي يتم تعريفها داخل دالة <bdi>loop</bdi> يمكن استخدامها خارج الدالة",
     options: ["صح","خطا"],
     correct:1,
     explanation:"لايمكن استخدامها خارج الدالة"
    },
    {
     question:"يتم انشاء ملف Cookie بواسطة استخدام الدالة Setcookie()",
     options: ["صح","خطا"],
     correct:0,
    explanation:"يتم انشاء الملفCookie بواسطة الدالة Setcookie"
    },

    {
     question:"المستخدم النهائي لنظام قاعدة البيانات هو الذي يقوم",
     options: ["تصميم قواعد البيانات","برمجة النظام","حماية قواعد البيانات","اضافة البيانات و التعديل و الحذف"],
     correct:3,
     explanation:"يقوم بالاضافة و التعديل و الحذف"
    },

    {
     question:"النص المكتوب داخل يعتبر",
     options: ["عنوان جانبي داخل صفحة الويب","وصف لصفحة الويب","فقرة جديدة داخل صفحة الويب","عنوان لصفحة الويب"],
     correct:1,
    explanation:"يعتبر وصف صفحة"
    },

    {
     question:"لتحديد طول النص المدخل في TextBox",
     options: ["Length","Text","Long","ForeColor"],
     correct:0,
     explanation:"Text يستخدم لاسترداد النص المدخل Long هو نوع بيانات يستخدم للارقام الصحيحة ForeColor تستخدم لتعيين لون الخط"
    },

    {
    question:"لانشاء جدول استخدم الامر",
    options: ["Alter Table","Drop Table","Create Table","Desc Table"],
    correct:2,
    explanation:"امر Create Table يستخدم لانشاء جدول جديد في قاعدة البيانات"
    },

    {   
     question:"لايجاد اصغر قيمة بالجدول استخدم خاصية MIN",
     options: ["صح","خطا"],
     correct:0,
    explanation:"تعني اقل قيمة MIN"
    },

    {
     question:"يمكن تقسيم النصوص باستخدام الامر",
     options: ["Length","Split","Replace","Index"],
     correct:1, 
     explanation:"امر Split يستخدم لتقسيم النص الي قطع صغيرة بناء على فاصل معين مثل مسافة او فاصلة او اي حرف اخر"
    },
    
    {
    question:"تتم معالجة الاخطاء عند الاتصال بقواعد البيانات من خلال عملية",
     options: ["Try Catch","Try","Finally","Nothing"],
     correct:0,
     explanation:"تستخدم Catch لالتقاط الاخطاء التي تحدث اثناء تنفيذ الكود"
    } , //أخر شي ضافتو ايثار 
    {
    question:"في قواعد البيانات تسمى الصفوف ",
    options:["Fields","Records","Tables","Columns"],
    correct:1,
    explanation:"   في قواعد البيانات تسمى صفوف Records"
    },
     {
    question:"تتكون قاعدة البيانات من مجموعة من",
    options:["الصفوف","اللاعمدة ","الجداول","العلاقات"],
    correct:2,
    explanation:"تتكون من الجداول التي تحتوي على الاعمدة والصفوف"
    },
     {
    question:" تعني؟ Data Base Managment System ",
    options:["نظم ادارة قواعد البيانات","نظم ادارة الجداول","قواعد بيانات النظم","ادارة نظم البيانات"],
    correct:0,
    explanation:"هو برنامج يستخدم لانشاء تنظيم ادارة او استرجاع البيانات داخل قاعدة البيانات"
    },
      {
    question:"(Windows)يعد ",
    options:["نظام تشغيل","برنامج تطبيقي","لغة برمجة","متصفح انترنت"],
    correct:0,
    explanation:"هو نظام تشغيل طورته شركة مايكروسفت "
    },
    {
    question:"تنتهي مهمة المبرمج بكتابة البرنامج",
    options:["خطأ","صح"],
    correct:0,
    explanation:"لاتنتهي مهمة المبرمج بمجرد كتابة الكود بل تشمل مهامه أيضا"
    },
    {
    question:"أي مما يلي لايعتبر نوع من أنواع القيود",
    options:["Unique","Sum","Not Null","Check"],
    correct:1,
    explanation:"القيود هي شروط أو قواعد تفرض على البيانات أو العمليات لتنظيمها وضمان صحتها"
    },
    {
    question:"(ROUND)الدالة " ,
    options:["تقتص الرقم","تعيد نفس الرقم","تقرب الرقم","لاتؤثر"], 
    correct:2,
    explanation:"تستخدم لتقريب رقم عشري الى اقرب عدد صحيح أو الى عدد محدد من المنازل العشرية"
    },
     {
    question:" ResetText()ماهي وظيفة " ,
    options:["ارجاع قيمة النص الافتراضية","مسح النص الحالي","اضافة نص","حذف النص"], 
    correct:1,
    explanation:"تستخدم هذه الخاصية أو الدالة غالبا في بيئات البرمجة الرسومية وهي مرتبطة عادة بعناصر تحكم الادخال"
    },
    {
    question:"كل حرف من السلسلة الحرفية <bdi> String</bdi> يتم تخزينه في" ,
    options:["byte","bits","kilobyte","megabytes"], 
    correct:0,
    explanation:"في عالم الحوسبة هناك العديد من وحدات التخزين المستخدمة لقياس حجم البيانات"
    },
    {
    question:" الصيغة الصحيحة لاضافة رقم واحد للمتغير <bdi>X</bdi> هي"  ,
    options:["$x=+1","$x++","++x","$x+1"], 
    correct:1,
    explanation:""
    },
    {
    question:"يستخدم الامر <bdi>ROLLBACK</bdi> لي؟" ,
    options:["للتراجع عن عملية حذف الصفوف","للتراجع عن التعديلات في بيانات الجدول","للتراجع عن عملية انشاء جدول","لتأكيد الحذف"], 
   correct:1,
   explanation:"هو أمر يستخدم في قواعد البيانات للتراجع عن التغييرات التي تمت خلال الانتقالة الحالية"
    },
    {
    question:"التنسيق <bdi>DD-MON-YYY</bdi>يظهر التاريخ بالصيغة" ,
    options:["39856","02-12-09","12-2-2009","39856"], 
    correct:2,
    explanation:"هو اختصار ل يوم وشهر وسنة "
    },
    {
    question:"في لغة<bdi>PHP</bdi> يرمز للعملية المنطقية <bdi>(orاو )</bdi>بالاشارة التالية" ,
    options:["&&","||","=!","=="], 
    correct:1,
    explanation:"تستخدم جميع العلامات التالية لتمثيل العملية المنطقية "
    },
    {
    question:"تستخدم الدالة <bdi>Filter_var()</bdi> للتحقق من صحة عنوان البريد الالكتروني" ,
    options:["صح","خطأ"], 
    correct:0,
    explanation:"تستخدم لتصفية وتحقق من صيغة البيانات"
    },
    {
    question:"تستخدم لتغيير صفات كائن في قاعدة البيانات" ,
    options:["grant","ALTER","DENY","Create"], 
    correct:1,
    explanation:"هو الأمر الأساسي لتعديل بنية الجداول في معظم أنظمة قواعد البيانات"
    }        
    
];

const practicalQuestions = [
   {
        question:"اي من الخيارات التالية يقوم بعرض شاشة حوار لاختيار لون معين ",
        options: ["()colorDialog1.showDialog","()showDialog","()showDialog.colorDialog1","()Dialog"],
        correct: 0,
        explanation: "()colorDialog1.showDialog الطريقة المعتمدة لعرض حوار الالوان "
    },
    {
        question: " SELECT*FROMEMP بعد تنفيذ الامر ",
        options: [" غير الخالية EMP تسترجع بيانات الجدول "," EMPتسترجع جميع سجلات الجدول ","(*)خطأفي استخدام ","يتم استرجاع السجل الاول فققط"],
        correct: 1,
        explanation:"تقوم باسترجاع جميع البينات الموجودة في الجدول  SELECT*FROMEMP"
    },
    {
     question:"I=len('Mohammed')حل الكود التالي ",
     options: ["5","Mohammed","4","8"],
     correct:3,
     explanation:" تتكون من 8 احرف Mohammed لاسترجاع عدد الاحرف في سلسلة نصية محددة لذا الحل هو 8 لان السلسلة  VB.NETفي لغة Len يستخدم دالة"
     },
     {
     question:"أي من الجمل التالية يحتوي على خطأ",
     options: ["SELECT empid WHERE empid=56949 AND lastname='SMITH'","SELECT*FROM emp WHERE empid=493945","SELECT empid FROM emp WHERE empid=493945","SELECT empid FROM emp"],
     correct:0,
     explanation:"مما يجعلها غير صحيحة FROM الجملة الخاطئة تفتقر الى "
     },
      {
     question:"Sa=10*(6-4)ماهي نتيجة العملية الحسابية  ",
     options: ["30","20","10","4"],
     correct:1,
     explanation:"نقوم بحساب ما بداخل القوسين ثم ضرب الناتج في 10"
     },
     {
     question:"MOD(6,5)ماهو ناتج الدالة ",
     options: ["36","5","3","1"],
     correct:3,
     explanation:" ترجع الباقي عند القسمة MOD"
     },
];

let current = 0;
let userAnswers = [];
let currentQuestions = []; // لتحديد الأسئلة بناءً على النوع

// تحديد نوع الأسئلة عند تحميل الصفحة
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type'); // جلب نوع الأسئلة (نظرية أو عملية)

if (type === 'theory') {
    currentQuestions = theoryQuestions; // الأسئلة النظرية
} else if (type === 'practical') {
    currentQuestions = practicalQuestions; // الأسئلة العملية
}

function loadQuestion(index) {
    const q = currentQuestions[index];
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = `
        <h3 id="question-number">السؤال ${index + 1} من ${currentQuestions.length}</h3>
<h2 id="question-text">${q.question}</h2>

        <div class="options" id="options"></div>
        <div class="explanation" id="explanation"></div>
        <button class="next-button" id="next-button" style="display:none;">السؤال التالي</button>
    `;

    const optionsDiv = document.getElementById("options");

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = opt;
        div.onclick = () => selectAnswer(i, q.correct, q.explanation, div);
        optionsDiv.appendChild(div);
    });

    document.getElementById("next-button").onclick = loadNextQuestion;
}

function selectAnswer(selected, correct, explanation, selectedDiv) {
    const optionDivs = document.querySelectorAll(".option");
    optionDivs.forEach((div, index) => {
        div.onclick = null;
        if (index === correct) {
            div.classList.add("correct");
        } else if (index === selected) {
            div.classList.add("wrong");
        }
    });

    userAnswers.push({
        question: currentQuestions[current].question,
        selected: selected,
        correct: correct,
        explanation: currentQuestions[current].explanation,
        options: currentQuestions[current].options
    });

    document.getElementById("explanation").innerHTML = explanation;
    document.getElementById("next-button").style.display = "inline-block";
}

function loadNextQuestion() {
    current++;
    if (current < currentQuestions.length) {
        loadQuestion(current);
    } else {
        showReport();
    }
}

function showReport() {
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = "<h2>النتيجة</h2>";

    userAnswers.forEach((answer, index) => {
        const isCorrect = answer.selected === answer.correct;

        const div = document.createElement("div");
        div.className = "question-box";
        div.style.backgroundColor = "#f1f5f9";
        div.style.marginBottom = "15px";
        div.style.padding = "10px";
        div.style.borderRadius = "10px";

        div.innerHTML = `
            <h3>سؤال ${index + 1}: ${answer.question}</h3>
            <p>✅ إجابتك: <strong style="color: ${isCorrect ? '#22c55e' : '#ef4444'}">
            ${answer.options[answer.selected] || 'لم تُجب'}</strong></p>
            <p>🎯 الإجابة الصحيحة: <strong>${answer.options[answer.correct]}</strong></p>
            <p><em>${answer.explanation}</em></p>
        `;

        questionBox.appendChild(div);
    });
}

window.onload = () => {
    loadQuestion(current);
};
