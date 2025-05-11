const theoryQuestions = [
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
     question: "لغة برمجية مفسرة تستخدم في تطبيقات الويب والعمل على جانب الخادم وليس على جانب المستخدم اي هي خاصة بالمواقع الديناميكية PHP",
     options: ["خطأ","صح"],
     correct:1,
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
        correct: 0,
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

    document.getElementById("explanation").innerText = explanation;
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
    questionBox.innerHTML = "<h2>نتيجة الاختبار:</h2>";

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
