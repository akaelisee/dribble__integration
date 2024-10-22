// Slide
let swiper1 = new Swiper('.firstSwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    cssMode: true,
    keyboard: true,
    mousewheel: true
});

let swiper2 = new Swiper('.lastSlider', {
  // direction: 'horizontal',
  direction: 'vertical',
  loop: true,
  autoplay: {
  delay: 3000,
  // disableOnInteraction: false,
},
spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Slide
function next() {
   return swiper2.slideNext();
}

function prev() {
  return swiper2.slidePrev();
}

function stop() {
  return swiper2.autoplay.stop();
}


// Filter Category
filterCategory("all")
function filterCategory(c) {
  var x, i;
  x = document.getElementsByClassName("item__project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeCategory(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addCategory(x[i], "show");
  }
}

function addCategory(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeCategory(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.querySelector(".nav-project");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Scroll
$(document).ready(function(){
  $('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
      e.preventDefault();
       const hash = this.hash;
       $('html, body').animate(
         {
           scrollTop: $(hash).offset().top
         },
         800
       );
    }
  })
});