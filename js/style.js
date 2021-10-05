

const navbarOpenBtn = document.querySelector('.navbar-toggler-open');
const navbarCloseBtn = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navbarOpenBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbarShow');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbarShow');
});

// stopping animation and transition while resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

$('#featured .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots: false,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      800:{
          items:2,
          nav:true
      },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
  }
})

$('#categories .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      992:{
          items: 3,
      },
      1200:{
          items:4,
          loop:true
      }
  }
})