<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;700&display=swap" rel="stylesheet">
  <title>محاكي الاختبار</title>
  <style>
    body {
      margin: 0;
      color: white;
      min-height: 100vh;
      background-image: url('img/backq.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      overflow: hidden;
      font-family: 'El Messiri', sans-serif;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      max-width: 1200px;
      flex-direction: row-reverse;
      flex-wrap: wrap;
    }

    .btn {
      font-size: 1.2rem;
      padding: 1rem 2.5rem;
      border: none;
      outline: none;
      border-radius: 0.4rem;
      cursor: pointer;
      text-transform: uppercase;
      background-color: rgb(14, 14, 26);
      color: rgb(234, 234, 234);
      font-weight: 700;
      transition: 0.6s;
      box-shadow: 0px 0px 60px #1f4c65;
      -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
      height: fit-content;
     font-family: 'El Messiri', sans-serif;
    }

    .btn:active {
      scale: 0.92;
    }

    .btn:hover {
      background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
      color: rgb(4, 4, 38);
    }

    .instructions {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 25px;
      border-radius: 15px;
      font-size: 18px;
      line-height: 1.8;
      box-shadow: 0px 0px 20px #1f4c65;
      max-width: 600px;
      white-space: pre-wrap;
      overflow: hidden;
      border-right: 4px solid #1f4c65;
    }

    .character {
      max-width: 150px;
      height: auto;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- الزر -->
    <button class="btn" onclick="window.location.href='exam1.php';">
      بدء الاختبار
    </button>

    <!-- التعليمات -->
    <div class="instructions" id="instructionsBox"></div>

    <!-- الصورة يسار التعليمات -->
    <img class="character" src="img/q.png" alt="شخصية التخرج" />
  </div>

  <script>
    const text = ` تعليمات الاختبار الشامل

• المدة: ساعتان ونصف
• عدد الأسئلة: 100 (نظري + عملي)
• الأسئلة من نوع اختيار من متعدد – إختر إجابة واحدة فقط
• يمنع استخدام الجوال أو المراجع أو الأكواد
• استخدم "التالي" و"السابق" أو أرقام الأسئلة للتنقل
• بعد الضغط على "إنهاء الاختبار" ستظهر النتيجة من 100
• لا يمكنك العودة بعد إنهاء الاختبار

*الاختبار يعتبر مشابة للاختبار الشامل مع اختلاف التنسيق*`;

    let i = 0;
    const speed = 20;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("instructionsBox").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    window.onload = typeWriter;
  </script>

</body>
</html>
