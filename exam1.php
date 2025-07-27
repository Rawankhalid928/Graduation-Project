
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>محاكي الاختبار</title>
    <link rel="stylesheet" href="exam.css">
</head>
<body>


<div id="timer-circle">
  <div id="timer-text">02:30:00</div>
</div>


    <div class="container">

        <aside class="sidebar" id="question-nav">

    </aside>

<main class="content">
    
    <div class="question-box" id="question-box">
        <h2 id="question-text"></h2> 
        <div class="options" id="options-container"></div> 
    </div>

<div class="controls" >
    <div class="nav-buttons">
        <button id="prevBtn" onclick="prevQuestion()">السابق</button>
        <button id="nextBtn" onclick="nextQuestion()">التالي</button>
    </div>
    <button id="finishBtn" onclick="finishQuiz()">إنهاء الاختبار</button>
</div>



</main>

    </div>
    <div class="result" id="resultBox"></div>

    <!-- نافذة منسقة عند انتهاء الوقت -->
<div id="custom-alert" style="display: none;" class="custom-alert">

  <div class="alert-box">
    <h2>انتهى الوقت ⏰</h2>
    <p>تم إنهاء الاختبار تلقائيًا</p>
    <button onclick="closeCustomAlert()">متابعة</button>
  </div>
</div>

    <script src="exam.js"></script>

<script>
// ✅ الجمل التشجيعية مصنفة حسب النتيجة
const messages = {
  excellent: [
    "🔥 أنت نجم البرمجة ! واصل",
    "💪 أداء خارق ! واضح تعبك",
    "🎉 نتيجتك ممتازة ، فخورين فيك!",
    "🚀 تستاهل كأس التميز",
    "🌟 نتيجة تُرفع الراس"
  ],
  average: [
    "👏 نتيجة جيدة ! استمر في التطوير",
    "📚 شوي تركيز وتوصل للأفضل",
    "😌 حاول تراجع بس أنت على الطريق الصح",
    "⏳ النتيجة حلوة، بس تقدر تطلع أكثر",
    "⚡ فيه تقدم، لا توقف"
  ],
  low: [
    "💡 لا تحبط ، أعد المحاولة وبتشوف الفرق",
    "🚧 الخطأ أول خطوة للنجاح",
    "🔄 حاول من جديد، كلنا بدأنا كذا",
    "🛠️ شد حيلك وراجع شوي وبتبدع",
    "🎯 لا تستسلم ، النتيجة ما تعكس قدراتك الحقيقية"
  ]
};

// ✅ دالة تختار جملة عشوائية حسب النتيجة
function getMotivationalMessage(score) {
  if (score >= 85) {
    return messages.excellent[Math.floor(Math.random() * messages.excellent.length)];
  } else if (score >= 50) {
    return messages.average[Math.floor(Math.random() * messages.average.length)];
  } else {
    return messages.low[Math.floor(Math.random() * messages.low.length)];
  }
}

function finishQuiz() {
  const allQuestions = [...theoryQuestions, ...practicalQuestions];
  let correctAnswers = 0;

  for (let i = 1; i <= allQuestions.length; i++) {
    const selected = answers[i];
    const correct = allQuestions[i - 1].correct;
    if (selected === correct) {
      correctAnswers++;
    }
  }

  const score = Math.round((correctAnswers / allQuestions.length) * 100);

const message = getMotivationalMessage(score);

  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-image: url('img/backq.jpg'); background-size: cover;">
      <div style="
        background-color: #1B0034;
        border-radius: 16px;
        padding: 40px;
        text-align: center;
        color: white;
        font-size: 24px;
        max-width: 500px;
        width: 90%;
        position: relative;
        box-shadow: 0 0 20px rgba(230, 0, 122, 0.4), 0 0 40px rgba(165, 0, 255, 0.3);
      ">

        <div style="margin-bottom: 20px; font-size: 30px; font-weight: bold;">
           لقد أنهيت الاختبار
        </div>

        <div style="font-size: 26px; margin-bottom: 30px;">
          نتيجتك: <span style="color:#00FFC3">${score} / 100</span>
        </div>


<!-- 🟡 الجملة التشجيعية -->
<div style="margin-top: -15px; margin-bottom: 30px; font-size: 20px; color: #FFDD00;">
  ${message}
</div>


        <button  onclick="window.location.href='exam.php'" style="
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: linear-gradient(to right, #E6007A, #A500FF);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 0 20px #E6007A;
        ">
          إعادة المحاولة 
        </button>
<button onclick="window.location.href='index.php'" style="
  margin-top: 15px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #00C9FF, #92FE9D);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 20px #00FFC3;
">
  الصفحة الرئيسية 
</button>

        <div style="
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #E6007A, #FF6C00, #FFDD00, #00FFC3, #0077FF, #A500FF);
          background-size: 400% 400%;
          animation: gradientBorder 6s ease infinite;
          z-index: -1;
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
        "></div>
      </div>
    </div>

    <style>
      @keyframes gradientBorder {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    </styl>
  `;
}
</script>

</body>
</html>
