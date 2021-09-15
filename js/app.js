$(document).ready(function(){

  //-----------Animación con Scroll (https://github.com/ComputerWolf/SlickNav)
  /* ScrollReveal().reveal('.html', { delay: 100, duration: 2000});
  ScrollReveal().reveal('.css', { delay: 300, duration: 2000});
  ScrollReveal().reveal('.js', { delay: 500, duration: 2000});
  ScrollReveal().reveal('.sass', { delay: 100, duration: 2000});
  ScrollReveal().reveal('.bootstrap', { delay: 300, duration: 2000});
  ScrollReveal().reveal('.jquery', { delay: 500, duration: 2000});
  ScrollReveal().reveal('.php', { delay: 300, duration: 3000});
  ScrollReveal().reveal('.mysql', { delay: 300, duration: 3000});
  ScrollReveal().reveal('.git', { delay: 100, duration: 2000});
  ScrollReveal().reveal('.github', { delay: 300, duration: 2000});
  ScrollReveal().reveal('.wordpress', { delay: 100, duration: 3000}); */

  //-----------Carrusel de imágenes (https://owlcarousel2.github.io/OwlCarousel2/)
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    items: 5,   
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    lazyLoad: true,
    nav: false,
    responsive:{ //Min-Width
        0:{
            items:2,
        },
        500:{
            items:3,
        },
        700:{
            items:4,
        },
        1000:{
            items:5,
        },
    }
  });

  //-----------Animación de Menú-Scroll 
  let desplazarMenu = () => {
      let menu_nav = document.getElementById('menu-nav');
      let scroll_menu = window.pageYOffset;
      let main_principal = document.querySelector('.main');

      if(scroll_menu > 300){
          menu_nav.classList.add('positionFixed');
          main_principal.style.marginTop = '84px';
      }else{
          menu_nav.classList.remove('positionFixed');
          main_principal.style.marginTop = '0px';
      }
  }
  window.document.addEventListener('scroll', desplazarMenu);
});
