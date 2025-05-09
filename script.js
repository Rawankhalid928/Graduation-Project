const theoryQuestions = [
    {
        question: "ما هي عاصمة السعودية؟",
        options: ["الرياض", "جدة", "مكة", "الدمام"],
        correct: 0,
        explanation: "العاصمة الرسمية للسعودية هي الرياض."
    },
    {
        question: "كم عدد أركان الإسلام؟",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "أركان الإسلام خمسة وهي الشهادة، الصلاة، الزكاة، الصوم، والحج."
    }
];

const practicalQuestions = [
    {
        question: "ما هي الطريقة الصحيحة لاستخدام الأمر في بيئة لينكس؟",
        options: ["إدخال الأمر مباشرة", "استخدام sudo", "إضافة مسار صحيح", "مراجعة الإصدارات"],
        correct: 1,
        explanation: "الأمر يجب أن يُنفذ باستخدام صلاحيات الـ sudo في بيئة لينكس."
    },
    {
        question: "كيف تقوم بإنشاء ملف في Python؟",
        options: ["open('filename')", "create('filename')", "touch('filename')", "open('filename', 'w')"],
        correct: 3,
        explanation: "يمكنك إنشاء ملف باستخدام open مع وضع 'w' لكتابة محتوى الملف."
    }
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
