$(document).ready(function(){
$('.carrousel-pets').owlCarousel({
  items:1,
  margin: 15,
  nav: true,
  center: true,
  navText: ["<span><</span>","<span>></span>"],
  dots: false,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:100000,
  loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.carrusel-photos').owlCarousel({
  items:2,
  margin: 15,
  nav: true,
  navText: ["<span><</span>","<span>></span>"],
  dots: false,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:100000,
  loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
   })