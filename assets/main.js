// AOS
AOS.init({
  duration:1200, 
  
});

// Navbar Scroll
window.addEventListener("scroll",function(){
  var header = this.document.querySelector("#navbar")
  header.classList.toggle("sticky",this.window.scrollY>300)
})



// Swiper Js

var swiper = new Swiper(".swiper-section-1", {
  fadeEffect: {
    crossFade: true,
  },
  speed: 1800,
  effect: "fade",
    speed:1000,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      
    },
  });



  // tabs

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



// Add active navbar Link
const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}




// Swiper 2 
var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets:true,
          dynamicMainBullets:1,
        },
        breakpoints: {
          250:{
            slidesPerView:1,
          },
          550: {
            slidesPerView: 1,
        
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
        
        
        
      });







// Swiper 3
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 10,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250:{
      slidesPerView:1,
    },
    550: {
      slidesPerView: 1,
  
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




// Navbar Menu
const menu = document.querySelector(".menu")
const navList = document.querySelector(".nav-list")
const nav = document.querySelector("nav")
menu.addEventListener("click",()=>{
  nav.style.height = "auto"
  navList.style.display = "block"
})