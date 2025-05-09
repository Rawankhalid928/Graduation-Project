gsap.registerPlugin(ScrollTrigger);



/*فنكشين حق البكوسات div*/
let elements = [".div1", ".div2", ".div3"];

elements.forEach(selector => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      scrub:true,
      pin:true,
      pinSpacing:false,
      toggleActions: "restart pause reverse pause"
  },
    duration: 3
  });
});
/*فنكشين حق البكوسات div*/


  gsap.from(".control", {
    scrollTrigger: {
        trigger:".control",
        scrub:true,
        toggleActions: "restart pause reverse pause"
    },
    x: -150, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 3,
  });
  gsap.from(".gamep", {
    scrollTrigger: {
        trigger:".gamep",
        scrub:true,
        toggleActions: "restart pause reverse pause"
    },
    y: -250, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 3,
  });

  /*فنكشين حق ماريو و امونق اس*/

  [".card1", ".card2"].forEach(selector => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        scrub: true,
        toggleActions: "restart pause reverse pause"
      },
      opacity: 0,
      duration: 3,
      ease: "power3.out"
    });
  });

  /*فنكشين حق ماريو و امونق اس*/
 
  
gsap.from(".p1",{
     opacity:0, //يبدأ بشفافية
     scale:0.5, //يبدأ بحجم اصغر
     duration:2, //مدة التحريك
     ease: "bounce.out" //تأثير حركي   
});

gsap.from(".h1", {
    opacity: 0,
    x: -100, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 2,
    ease: "power3.out"
  });
  gsap.from(".uiverse", {
    opacity: 0,
    y: -100, // تغيير هذه القيمة لجعل العنصر يظهر من الأعلى
    duration: 2,
    ease: "power3.out"
  });
  gsap.from(".robot", {
    opacity: 0,
    x: 100, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 2,
    ease: "power3.out"
  });
  gsap.from(".g1", {
    scrollTrigger: {
        trigger:".g1",
        scrub:true,
        toggleActions: "restart pause reverse pause"
    },
    x: 50, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 0.1,
  });
  
  gsap.from(".g2", {
    scrollTrigger: {
        trigger:".g2",
        scrub:true,
        toggleActions: "restart pause reverse pause"
    },
    x: -50, // تغيير هذه القيمة لتحديد المسافة التي يظهر منها العنصر
    duration: 0.1,
  });
