$(document).ready(function(){

    //-----------Animación Scroll (https://github.com/jlmakes/scrollreveal)
    //ScrollReveal().reveal('.animJV',{reset: true, delay: 300, duration: 2000, distance: '150px', origin: 'bottom',rotate: {x: 20,z: 20}, scale: 0.3});
    ScrollReveal().reveal('.animJV',{reset: true, delay: 100, duration: 2000, distance: '0', scale: .3});
    ScrollReveal().reveal('.animImgPerf',{reset: true, delay: 100, distance: '0', duration: 2000});
    ScrollReveal().reveal('.animSobreMi',{reset: true, delay: 100, distance: '0', duration: 2000});
    ScrollReveal().reveal('.animProy1',{reset: false, delay: 100, distance: '10px', origin: 'left', duration: 1500});
    ScrollReveal().reveal('.animProy2',{reset: false, delay: 300, distance: '10px', origin: 'left', duration: 1500});
    ScrollReveal().reveal('.animProy3',{reset: false, delay: 700, distance: '10px', origin: 'left', duration: 1500});
    ScrollReveal().reveal('.animProy4',{reset: false, delay: 1000, distance: '10px', origin: 'left', duration: 1500});

    //-----------Calcular edad actual y experiencia
    const fechaAct = new Date();
    if(fechaAct.getMonth() > 2 || (fechaAct.getMonth() == 2 && fechaAct.getDate() >= 6)){
        document.getElementById('age').innerHTML = fechaAct.getFullYear() - 1998;
    }else{
        document.getElementById('age').innerHTML = fechaAct.getFullYear() - 1999;
    }

    document.getElementById('timeExp').innerHTML = fechaAct.getFullYear() - 2018;

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
        let main_principal = document.querySelector('.portada');

        if(scroll_menu > 300){
            menu_nav.classList.add('positionFixed');
            main_principal.style.marginTop = '77px';
        }else{
            menu_nav.classList.remove('positionFixed');
            main_principal.style.marginTop = '0px';
        }
    }
    window.document.addEventListener('scroll', desplazarMenu);
});

const contVideos = document.getElementById('contVideos');
const btnVisualizar = document.querySelectorAll('.btn-visualizar');
const srcProyectos = ['proyecto_plataforma_ajedrez','proyecto_proyectos_web','proyecto_dashboard','proyecto_certificado']

btnVisualizar.forEach((btn,index)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();

        contVideos.innerHTML= /* HTML */`
            <div class="btn-cerrar">
                <i class="fa-solid fa-xmark"></i>
            </div>

            <video id="my-video-${index}" class="video-js">
                <source src="vid/${srcProyectos[index]}.mp4" type="video/mp4" />
            </video>
        `

        videojs(document.getElementById(`my-video-${index}`), {
            controls: true,
            autoplay: false,
            preload: 'auto',
            height: 400
        });
        
        document.querySelector('.btn-cerrar').addEventListener('click', ()=>{
            contVideos.style.display="none"
            contVideos.innerHTML = '';
        });

        contVideos.style.display="flex"
    });     
    
});
