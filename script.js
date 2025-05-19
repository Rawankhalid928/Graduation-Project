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
    question:"يتم تمثيل الجداول في نموذج الكيانات والعلاقات <bdi>ER</bdi> على شكل",
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
     question:"يتم انشاء ملف <bdi>Cookie</bdi> بواسطة استخدام الدالة <bdi>SetCookie</bdi>",
     options: ["صح","خطا"],
     correct:0,
    explanation:"يتم انشاء ملف من خلال استخدام الدالة <bdi>SetCookie</bdi>"
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
     question:"لتحديد طول النص المدخل في <bdi>TextBox</bdi>",
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
     question:"لايجاد اصغر قيمة بالجدول استخدم خاصية <bdi>MIN</bdi>",
     options: ["صح","خطا"],
     correct:0,
    explanation:"تعني اقل قيمة <bdi>MIN</bdi>"
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
    },   
     {
        question:"لطباعة البيانات في لغة <bdi>PHP</bdi> هل يمكن استخدام الامر <bdi>Print</bdi>",
        options: ["صح","خطا"],
        correct:0,
        explanation:"في <bdi>PHP</bdi> نستخدم الامر <bdi>Print</bdi>"
    },
    {
        question:"لتخزين القيمة 56.44 فان نوع المتغير المناسب",
        options: ["Long","Double","Integer","Boolean"],
        correct:1,
        explanation:"النوع Double يستخدم لتخزين الأرقام العشرية بدقة عالية في معظم لغات البرمجة"
    },
    {
        question:"الخاصية <bdi>Back Color</bdi>",
        options: ["تغير لون الخط","تغير لون الخلفية"],
        correct:1,
        explanation:"تستخدم <bdi>Back Color</bdi> لتغير لون الخلفية لعنصر في واجهة المستخدم",
    },
    {
        question:"ناتج المعامل <bdi>and</bdi> تكون <bdi>True</bdi>اذا كانت جملتا الشرط <bdi>True</bdi>",
        options: ["صح","خطا"],
        correct:0,
        explanation:"يطلع الناتج <bdi>True</bdi>"
    },
    {
        question:"عند تحويل بيانات من نص الى رقم تحتفظ بالبيانات المخزنة",
        options: ["خطا","صح"],
        correct:1,
        explanation:"عندما تقوم بتحويل بيانات من نص الى رقم مثل <bdi>Integer</bdi> فان البيانات المخزنة تكون مماثلة تماما مع الرقم الذي تم تحويلة"
    },
    {
        question:"اي من الازواج التالية يمثل علاقة <bdi>1:M</bdi>",
        options: ["الدولة و العاصمة","الشخص ورقم الهوية","السيارة و الاطارات",  "الطلاب و المواد الدراسية" ],
        correct:2,
        explanation:"حيث ان لكل سيارة عدة اطارات"
    },
    {
        question:"الامر الذي يستخدمة مسؤول قاعدة البيانات لحذف الصلاحيات من المستخدم",
        options: ["Grant","Delete","Revoke"],
        correct:2,
        explanation:"امر <bdi>Revoke</bdi> يستخدم في <bdi>SQL</bdi> لسحب او الغاء الصلاحيات التي منحت سابقا لمستخدم معين على قاعدة البيانات او جدول معين"
    },
    {
        question:"اي من الاتي صحيح عند الغاء الاعمدة",
        options: ["يمكن الغاء اكثر من عمود واحد في الامر الواحد","لايمكن استعادة العمود بعد الغاؤه","العمود المراد الغاؤه يجب ان يكون فارغا","يجب ان تبقى عمود واحد على الاقل بعد عملية الالغاء"],
        correct:1,
        explanation:"لايمكن استعادة العمود اذا تم الغاؤه"
    },
    {
        question:"الخاصية <bdi>ListView</bdi> تمكنك من عرض العناصر على شكل ايقونات كما يفعل سطح المكتب و مستكشف النظام",
        options: ["صح","خطا"],
        correct:0,
        explanation:"تمكنك من عرض العناصر على شكل ايقونات"

    },
    {
        question:"دالة تجمعية تستخدم لاسترجاع عدد السجلات في جدول ما",
        options: ["Sum()","Avg()","Count()","Max()"],
        correct:2,
        explanation:"Count تسترجع عدد السجلات في جدول ما"
    },
    {
        question:"اي من ادوات التحكم التالية تستخدم لعرض نص ثابت لايمكن للمستخدم تغيره",
        options: ["TextBox","Button","List","Label"],
        correct:3,
        explanation:"تستخدم في واجهات المستخدم لعرض نص ثابت لايمكن للمستخدم تغيره Label"
    },
    {
        question:"اي من الكلمات المحجوزة في لغة <bdi>SQL</bdi> ",
        options: ["INSERT","MAKE","VAR","STRING"],
        correct:0,
        explanation:"تعتبر <bdi>INSERT</bdi> من الكلمات المجوزة في <bdi>SQL</bdi>"
    },
    {
        question:"هل لغة <bdi>Java</bdi> حساسة في حالة الاحرف",
        options: ["صح","خطا"],
        correct:0,
        explanation:"java حساسة في حالة الاحرف"
    } ,      
    {
        question:"لاستقبال مدخلات نصية من المستخدم في لغة <bdi>VB.Net</bdi>",
        options: ["Check Box","List Box","Input Box","Msg Box"],
        correct:2,
        explanation:"<bdi>InputBox</bdi> هي دالة في <bdi>VB.NET</bdi> تستخدم لعرض نافذة يمكن من خلالها للمستخدم ادخال بيانات نصية"

    },
    {
        question:"<bdi>Arr(3,4)</bdi>",
        options: ["عدد الصفوف 3 وعدد الاعمدة 4","عدد الصفوف 4 و عدد الاعمدة 5","عدد الصفوف 4 و عدد الاعمدة 3","عدد الصفوف 5 و عدد الاعمدة 4"],
        correct:0,
        explanation:"<bdi>Arr(3,4)</bdi> يعبر عن مصفوفة او جدول يحتوي على 3 صفوف و 4 اعمدة"
    },
    {
        question:"يستخدم شكل المستطيل للجمل الشرطية في المخططات الانسابية <bdi>(FLOW CHART)</bdi>",
        options: ["خطا","صح"],
        correct:0,
        explanation:"يستخدم لتمثيل عمليات <bdi>(Operations)</bdi> بينما للجمل الشرطية يستخدم شكل المعين"
    },
    {
        question:"في المخططات الانسيابية <bdi>Flow Chart</bdi> الشكل المستخدم لبداية و نهاية البرنامج هو",
        options: ["مستطيل","معين","بيضاوي","متوازي اضلاع"],
        correct:2,
        explanation:"البيضاوي يستخدم لتمثيل بداية و نهاية البرنامج"
    },
    {
        question:"ماهي قيمة <bdi>SelectedIndex</bdi> اذا تم اختيار العنصر الاخير من قائمة <bdi>(List)</bdi> تحتوي على اربعة عناصر",
        options: ["3","4","5","0"],
        correct:0,
        explanation:"بشكل عام الفهارس تبدا من الصفر لذا اذا كان لديك قائمة من اربعة عناصر فان العنصر الاخير سيكون 3"
    },
   {
        question:"هو خطا يمكن تصحيحة بسهولة اذا توقف تشغيل البرنامج",
        options: ["Syntax Error","Logical Error","Run-Time Error","Overflow Error"],
        correct:0,
        explanation:"خطا التركيب النحوي يحدث عندما يكون هناك خطا في كتابة الشفرة"
    },
    {
        question:"هل الجملة التالية صحيحة <bdi>Dim x As Integer+=10</bdi>",
        options: ["صح","خطا"],
        correct:1,
        explanation:"لان علامة  الزيادة لاتستخدم مع تعريف المتغيرات"
    },
    {
        question:"في لغة البرمجة <bdi>Java</bdi> يمكن تعريف مصفوفات ذات اكثر من بعد واحد",
        options: ["خطا","صح"],
        correct:1,
        explanation:"نعم، في Java يمكن تعريف مصفوفات ذات أكثر من بعد، مثل int[][] arr = new int[3][4]"
    },
    {
        question:"<bdi>Session</bdi> هو وسيلة لتخزين المعلومات ليتم استخدامها عبر صفحات متعددة و يتم تخزينها في",
        options: ["جهاز المستخدم","الخادم","متغير","في كائن <bdi>Object</bdi>"],
        correct:1,
        explanation:"يتم تخزينها في الخادم"
    },
    {
        question:"تحتاج الاستعلامات الفرعية المرتبطة باستعلام رئيسي للكثير من الوقت و المعالجة بالمقارنة مع الاستعلامات غير المرتبطة باستعلامها الرئيسي",
        options: ["صح","خطا"],
        correct:0,
        explanation:"لان الاستعلامات المرتبطة تنفذ مرة لكل صف فتكون ابطا من غير المرتبطة"
    }
];

const practicalQuestions = [
         {
        question:"ماهي مخرجات البرنامج التالي <pre><code>< ?php $str='Hello World';<br> $result= strlen($str);<br> Echo $result?></code></pre>",
        options:["Hello World","10","11","World Hello"],
        correct:2,
        explanation:"<bdi>Strlen</bdi> تحسب عدد الاحرف ومن ضمنها الفراغ"
     },
{
    question: "عدد مرات طباعة علامة * من الكود التالي <pre><code>For(int i = 0; i &lt; 3; i++) <br>{ System.out.println();<br>For(int x = 0; x &lt; 3; x++) <br>{ System.out.println(&quot;*&quot;);}}</code></pre>",
    options: ["1", "3", "6", "9"],
    correct: 3,
    explanation: "لحلقة الخارجية 3 مرات، والداخلية 3 مرات، 3 × 3 = 9 مرات طباعة *"
},
{
        question:"ماهي مخرجات الكود التالي <pre><code> < ?php $array[0]='Sara';<br> $array[1]='Bayan';<br> $array[2]='Reem';<br> $array[3]='Noura';<br> $result=count($array);<br> echo $result ?> </code></pre>",
        options:["3","4","Sara,Bayan,Reem,Noura","Error"],
        correct:1,
        explanation:"دالة <bdi>count</bdi> تحسب عدد العناصر في المصفوفة، وعددهم 4"
     },
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
      {
        question:"ماهو قيمة المتغير <bdi>S</bdi> بعد تنفيذ العملية التاليه <bdi>int S=19%4;</bdi>",
        options:["2","4","3","4.75"],
        correct:2,
        explanation:"لان 4*4=16 و 19-16=3"
     },
     {
        question:"ما نتيجة الكود x>y&&a",
        options:["x>y=true and a","x>y=false and a"],
        correct:0,
        explanation:"اولا نحسب نتيجة<bdi>x>y</bdi> ثم نستخدم النتيجة مع <bdi>a</bdi> باستخدام <bdi>&&</bdi>"
     },
     {
        question:"العملية التي يقوم بها الامر التالي <pre><code><?php define('var','program');?></code></pre>",
        options:["تعريف متغير ثابت بمسمى var و اسناد قيمة له","تعريف متغير بمسمى var,program","دمج الكلمتين var,program لتصبح varprogram","Error"],
        correct:0,
        explanation:"لان <bdi>define</bdi> تستخدم لتعريف ثابت و ليس متغير عادي"
     },
     {
        question:"طريقة الكتابة الصحيحة لعبارة قيمة المتغير <bdi>X</bdi> اكبر من <bdi>9</bdi> او اصغر من <bdi>4</bdi>",
        options:["X<4>9","X<9>4","X>9 && X<4","X>9||X<4"],
        correct:3,
        explanation:"لان علامة || تستخدم لكلمة او"
     },
     {
        question:"ماهي مخرجات البرنامج التالي <pre><code><?php $a=12; Echo(gettype($a));?></code></pre>",
        options:["Boolean","String","Integer","Long"],
        correct:2,
        explanation:"gettype($a) ترجع integer"
     },
     {
        question:"ماهو الخطا في الكود التالي <pre><code><?php $x=100;<br>$y=200;<br> if($x>50)&&($y>=100)<br> { echo'both value is grater than 50';}?></code></pre>",
        options:["استخدام الدالة الشرطية if الصحيح استخدام Switch","استخدام الدالة الشرطية if الصحيح استخدام التكرار for","if($x>50 && $y>=100)"],
        correct:2,
        explanation:"تستخدم تركيب <bdi>if</bdi> بشكل صحيح و تحتوي على شرطين باستخدام <bdi>&& (and)</bdi>"
     },
     {
        question:"اي من التالي يعتبر تعريف صحيح لمصفوفة احادية",
        options:["int[]mylist={'1','2','3'};","int[]mylist=(1,2,3);","int mylist[][]={1,2,3};","int mylist[]={1,2,3};"],
        correct:3,
        explanation:"لان النوع <bdi>int</bdi> صحيح التسمية <bdi>[]mylist</bdi> صحيحة و القيم المحصورة داخل <bdi>{}</bdi> بشكل سليم"
     },
     {
        question:"ماهي الكتابة الصح للكود التالي <bdi>select*from Courses where mark between 90 and 100</bdi>",
        options:["Select*from Courses where mark>=90","Select*from Courses where mark>90 or mark<=100","Select*from Courses where mark in (90,100)","Select*from Courses where mark>=90 and mark<=100"],
        correct:3,
        explanation:"لانها تعطي نفس نتيجة <bdi>Between 90 and 100</bdi>"
     },
     {
        question:"ماهو ناتج الكود التالي <bdi>int i=5; int x =15;if(i<=5 && x >=15){i--;System.out.print(i--);}</bdi>",
        options:["3","4","2"],
        correct:1,
        explanation:"لان الامر <bdi>System.out.print(i--)</bdi> يطبع القيمة اولا ثم ينقصها"
     },
      {
        question:"ماهي مخرجات البرنامج التالي <bdi>for(int x = 12; x > 0; x = x/2){ System.out.print(x);}</bdi>",
        options:["136","631","13612","12631"],
        correct:3,
        explanation:"لأن البرنامج يطبع 12 6 3 1"
     },
     {
        question:"ماهي مخرجات البرنامج التالي <bdi>$x=1; $y=2; echo \"$x+$y\"=.($+$y);</bdi>",
        options:["$x+$y=3","3=3","1+2=3","1+2=1+2"],
        correct:2,
        explanation:"الجمع له أسبقية أعلى، ولما يتعامل مع نص في عملية حسابية، يحاول يستخلص قيمة رقمية من بداية النص، وإن لم يكن نصًا يبدأ برقم، يأخذ صفر. ثم يُتم العملية"
     },
     {
        question:"يمكن الوصول للعنصر الخامس في المصفوفة التالية باستخدام <bdi>int x []=new int[5];</bdi>",
        options:["int[5]","x[5]","x[4]"],
        correct:2,
        explanation:"لأن المصفوفات تبدأ العد من 0 و العنصر الخامس يكون موقعة 4"
     },
     {
        question:"لتعديل درجات المتدربين في الجدول <bdi>(Students)</bdi> بحيث تكون 20 درجة للمتدربين الذين حصلو على اقل من 20 درجة في العمود <bdi>(Degree)</bdi> نستخدم الامر",
        options:["UPDATE Students SET Degree=20 Where Degree> 20;","UPDATE Students SET Degree=20 WHERE Degree< 20;"," UPDATE Students Degree=20 WHERE Degree> 20;","UPDATE Students WHERE Degree< 20 SET Degree=20;"],
        correct:1,
        explanation:"لأن لتحديث الجدول <bdi>Update</bdi> لتحديد القيمة الجديدة <bdi>Set</bdi> لتحديد الصفوف التي ينطبق عليها الشرط <bdi>Where</bdi>"
     },
     {
        question:"قيمة <bdi>X</bdi> عند تنفيذ العملية الحسابية التالية في <bdi>VB.NET x=5+(-3*(412))</bdi>",
        options:["19","-24","-43","29","-1231"],
        correct:4,
        explanation:"لأن نبدأ بالأس ثم نضرب و نجمع"
     },
     {
        question:"كم مرة يقوم بطباعة الكود التالي <bdi>for(x = 0; x < 3; x++) for(y = 0; y < 3; ++y)</bdi>",
        options:["4","6","8","9"],
        correct:3,
        explanation:"لأن <bdi>3</bdi> مرات للحلقة الأولى و كل مرة منها <bdi>3</bdi> مرات للحلقة الثانية 3*3=9"
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
questionBox.innerHTML = `
    <h2>نتيجة الاختبار:</h2>
    <div id="result-buttons" style="margin: 20px 0; text-align: center;">
        <button onclick="window.location.href='index.html'" style="padding: 10px 20px; background: #d7b52c ; color: rgb(77, 29, 55) ; border: none; border-radius: 5px; cursor: pointer;"> 🏠 الصفحة الرئيسية</button>
        <button onclick="window.location.href='Questions.html'" style="padding: 10px 20px; background:  #d7b52c ;  color: rgb(77, 29, 55) ; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">❔العودة للأسئلة</button>
    </div>
`;
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
