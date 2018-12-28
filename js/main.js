$(document).ready(function() {
  // ====== Input Data ======
  // Data Portfolio
  var btnPortfolio = ["All", "Template", "Project"];
  var projects = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg"
  ];
  var templates = [
    "./img/templates_bake.png",
    "./img/templates_housing.png",
    "./img/templates_merged.png",
    "./img/templates_newshop.png"
  ];
  var all = [...templates, ...projects];

  // Data Animate
  var arrAnimate = [
    "wow flipInX fadeIn slow",
    "animated fadeInUp delay-2s",
    "animated fadeInDown delay-1s",
    "animated fadeInLeft delay-2s",
    "wow fadeInUp",
    "wow fadeInDown delay-1s",
    "wow fadeInDown",
    "wow flipInY fadeIn slow",
    "fade-up",
    "fade-down"
  ];
  // Data List ID
  var arrId = [
    "BgImgTop",
    "BgImgTitle",
    "My__Scroll",
    "AboutMe",
    "Skills",
    "Exp",
    "Edu",
    "Portfolio",
    "Share",
    "Community",
    "Contact"
  ];
  // ====== END Input Data ======

  // ====== Add Animate ======
  $(`#${arrId[0]}`).addClass(arrAnimate[2]);
  $(`#${arrId[1]}`).addClass(arrAnimate[3]);
  $(`#${arrId[2]}`).addClass(arrAnimate[1]);
  // $(`#${arrId[3]}, #${arrId[4]}, #${arrId[8]}, #${arrId[9]}, #${arrId[10]}`).addClass(arrAnimate[4]);
  // $(`#${arrId[3]} h3, #${arrId[4]} h3, #${arrId[8]} h3, #${arrId[9]} h3, #${arrId[10]} h3`).addClass(arrAnimate[5]);
  // $(`#${arrId[5]} h3, #${arrId[6]} h3, #${arrId[7]} h3`).addClass(arrAnimate[6]);
  // $(`#${arrId[3]}, #${arrId[4]}, #${arrId[5]}, #${arrId[6]}, #${arrId[7]}, #${arrId[8]}, #${arrId[9]}, #${arrId[10]}`).attr("data-aos", arrAnimate[8]);
  // $(`#${arrId[3]} h3, #${arrId[4]} h3, #${arrId[5]} h3, #${arrId[6]} h3, #${arrId[7]} h3, #${arrId[8]} h3, #${arrId[9]} h3, #${arrId[10]} h3`).attr("data-aos", arrAnimate[9]);
  for (var i = 3; i < arrId.length; i++) {
    $(`#${arrId[i]}`).attr({"data-aos": arrAnimate[8], "data-aos-offset":"120"});
    $(`#${arrId[i]} h3`).attr({"data-aos": arrAnimate[9], "data-aos-offset":"200"});
  }
  // ====== END Add Animate ======

  // ====== Show/Hide Represent, NavBar, return-to-top ======
  $(window).scroll(function() {
    var marginTop = $(this).scrollTop();
    if (marginTop >= 500) {
      $("#Represent, #NavBar, #return-to-top").fadeIn(600);
      $("#Represent, #NavBar, #return-to-top").removeClass(
        "animated fadeOutDown"
      );
      $("#Represent, #NavBar, #return-to-top").addClass("animated fadeInUp");
    } else {
      $("#Represent, #NavBar, #return-to-top").fadeOut(500);
      $("#Represent, #NavBar, #return-to-top").removeClass("animated fadeInUp");
      $("#Represent, #NavBar, #return-to-top").addClass("animated fadeOutDown");
    }
  });

  // Show/Hide Represent when screen < lg
  $("#Represent #IconHideRepresent").click(function(){
    $("#Represent").removeClass("d-block");
    $("#Represent").addClass("d-none");
    $("#IconShowRepresent").removeClass("d-none");
    $("#IconShowRepresent").addClass("d-block");
  })
  // function changeDisplay () {
  //   $("#Represent, #IconShowRepresent").toggleClass("d-block", )
   
  // }
  $("#IconShowRepresent").click(function(){
    $("#Represent").removeClass("d-none");
    $("#Represent").addClass("d-block");
    $("#IconShowRepresent").removeClass("d-block");
    $("#IconShowRepresent").addClass("d-none");
  })
  
  // ====== END Show/Hide ======

  // ====== NAV-BAR ======
  $("#NavBar a").on("click", function(event) {
    $("#NavBar a").removeClass("active");
    $(this).addClass("active");
    // func smooth scrolling
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
  // ====== END NAV-BAR ======

  // ====== Skills ======
  $("#Skills .skill__item span:nth-child(2)").counterUp({
    time: 800
  });

  // ====== Time Line ======
  var itemsTimeLine = document.querySelectorAll(".timeline li");
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      // rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function callbackFunc() {
    for (var i = 0; i < itemsTimeLine.length; i++) {
      if (isElementInViewport(itemsTimeLine[i])) {
        itemsTimeLine[i].classList.add("in-view");
      }
    }
  }
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  // ====== END Time Line ======

  // ====== Portfolio ======
  // Add Button Portfolio
  function showBtnPortfolio() {
    for (var i = 0; i < btnPortfolio.length; i++) {
      $("#myBtn__Portfolio").append(
        `<button class="btn my__btn ${arrAnimate[7]}" id="btn__port${
          btnPortfolio[i]
        }">${btnPortfolio[i]}</button>`
      );
    }
  }
  showBtnPortfolio();

  // Add Content Portfolio
  function showPortfolio(arrayImg) {
    var contentShow = "";
    var contentShowLightBoxSlide = "";
    var contentShowLightBoxItem = "";
    for (var i = 0; i < arrayImg.length; i++) {
      contentShow += `
            <div class="port__Item vanilla__effect data-tilt data-tilt-scale='1.1' ${
              arrAnimate[0]
            }">
                <img src=${arrayImg[i]} data-slide="${i}">
            </div>`;
      contentShowLightBoxSlide += `<li data-target="#portfolio__modalContent" data-slide-to="${i}"></li>`;
      contentShowLightBoxItem += `
            <div class="carousel-item">
                <img src=${
                  arrayImg[i]
                } class="img-fluid rounded mx-auto d-block">
            </div>
            `;
    }
    $("#list__Portfolio .row").html(contentShow);
    $("#myModalPortfolio .carousel-indicators").html(contentShowLightBoxSlide);
    $("#myModalPortfolio .carousel-inner").html(contentShowLightBoxItem);
  }
  $(`#btn__port${btnPortfolio[0]}`).addClass("active");
  showPortfolio(all);

  // Show All when click Portfolio in NavBar
  $("#NavBar a[href='#Portfolio']").click(function() {
    $("#myBtn__Portfolio button").removeClass("active");
    $(`#btn__port${btnPortfolio[0]}`).addClass("active");
    showPortfolio(all);
  });

  // Show Content when click Button in Portfolio
  $("body").delegate("#myBtn__Portfolio button", "click", function() {
    $("#myBtn__Portfolio button").removeClass("active");
    $(this).addClass("active");
    var content = $(this).html();
    if (content == btnPortfolio[1]) {
      showPortfolio(templates);
    } else if (content == btnPortfolio[2]) {
      showPortfolio(projects);
    } else {
      showPortfolio(all);
    }
  });

  // Open The Modal/Lightbox Portfolio
  function openModalPortfolio() {
    document.getElementById("myModalPortfolio").style.display = "block";
    var number = parseFloat($(this).attr("data-slide"));
    $(
      `#myModalPortfolio .carousel-indicators li:nth-child(${number + 1})`
    ).addClass("active");
    $(
      `#myModalPortfolio .carousel-inner div:nth-child(${number + 1})`
    ).addClass("active");
  }
  $("body").delegate(
    "#Portfolio #list__Portfolio img",
    "click",
    openModalPortfolio
  );

  // Close the Modal Portfolio
  $("#myModalPortfolio .close").click(closeModalPortfolio);
  function closeModalPortfolio() {
    document.getElementById("myModalPortfolio").style.display = "none";
    $("#myModalPortfolio .carousel-indicators li").removeClass("active");
    $("#myModalPortfolio .carousel-inner div").removeClass("active");
  }

  // ====== Vanilla Library ======
  $("body").delegate(".vanilla__effect", "mouseover", function() {
    VanillaTilt.init(this, {
      max: 60,
      speed: 300
    });
  });
  // ====== END Portfolio ======

  // ====== Contact Form ======
  function inputEffect() {
    function classReg(className) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ("classList" in document.documentElement) {
      hasClass = function(elem, c) {
        return elem.classList.contains(c);
      };
      addClass = function(elem, c) {
        elem.classList.add(c);
      };
      removeClass = function(elem, c) {
        elem.classList.remove(c);
      };
    } else {
      hasClass = function(elem, c) {
        return classReg(c).test(elem.className);
      };
      addClass = function(elem, c) {
        if (!hasClass(elem, c)) {
          elem.className = elem.className + " " + c;
        }
      };
      removeClass = function(elem, c) {
        elem.className = elem.className.replace(classReg(c), " ");
      };
    }
    function toggleClass(elem, c) {
      var fn = hasClass(elem, c) ? removeClass : addClass;
      fn(elem, c);
    }
    var classie = {
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
    if (typeof define === "function" && define.amd) {
      define(classie);
    } else {
      window.classie = classie;
    }

    if (!String.prototype.trim) {
      (function() {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
          return this.replace(rtrim, "");
        };
      })();
    }
    [].slice
      .call(document.querySelectorAll("input.input__field"))
      .forEach(function(inputEl) {
        if (inputEl.value.trim() !== "") {
          classie.add(inputEl.parentNode, "input--filled");
        }
        inputEl.addEventListener("focus", onInputFocus);
        inputEl.addEventListener("blur", onInputBlur);
      });
    function onInputFocus(ev) {
      classie.add(ev.target.parentNode, "input--filled");
    }
    function onInputBlur(ev) {
      if (ev.target.value.trim() === "") {
        classie.remove(ev.target.parentNode, "input--filled");
      }
    }
  }
  inputEffect();
  // ====== END Contact Form ======

  // ====== Scroll to Top ======
  $("#return-to-top, footer a").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      1200
    );
  });
  $("#My__Scroll a").click(function() {
    $("body,html").animate(
      {
        scrollTop: 626
      },
      800
    );
  });
  // ====== END Scroll to Top ======

  // ====== WOW ======
  new WOW().init();

  // ====== AOS ======
  AOS.init();
});