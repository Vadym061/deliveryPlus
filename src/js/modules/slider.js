export function heroSlider (){

  function cardFlip(){
    let cards = document.querySelectorAll('.card');
   
    [...cards].forEach((card)=>{
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');

      });
    });
  }

  cardFlip();

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    freeMode: true,
    breakpoints: {
      340 :{
        slidesPerView: 1.2,
      },
      370 :{
        slidesPerView: 1.3,
      },
      400 :{
        slidesPerView: 1.4,
      },
      420 :{
        slidesPerView: 1.5,
      },
      470 :{
        slidesPerView: 1.7,
      },
      520 :{
        slidesPerView: 1.8,
      },
      570 :{
        slidesPerView: 2,
      },
      620 :{
        slidesPerView: 2.1,
      },
      640 :{
        slidesPerView: 1.5,
      },
      690 :{
        slidesPerView: 1.7,
      },
      740 :{
        slidesPerView: 1.8,
      },
      790 :{
        slidesPerView: 1.9,
      },
      840 :{
        slidesPerView: 2,
      },
      890 :{
        slidesPerView: 2.2,
      },
      960 :{
        slidesPerView: 2.4,
      },
      1060:{
        slidesPerView: 3,
      }
    }
  });

  let newSwiper = new Swiper(".nextSwiper", {
    slidesPerView: 1.1,
    freeMode: true,
    breakpoints: {
      340 :{
        slidesPerView: 1.2,
      },
      370 :{
        slidesPerView: 1.3,
      },
      400 :{
        slidesPerView: 1.4,
      },
      420 :{
        slidesPerView: 1.5,
      },
      470 :{
        slidesPerView: 1.7,
      },
      520 :{
        slidesPerView: 1.8,
      },
      570 :{
        slidesPerView: 2,
      },
      620 :{
        slidesPerView: 2.1,
      },
      640 :{
        slidesPerView: 1.7,
      },
      690 :{
        slidesPerView: 1.9,
      },
      740 :{
        slidesPerView: 2,
      },
      790 :{
        slidesPerView: 2.2,
      },
      840 :{
        slidesPerView: 2.3,
      },
      890 :{
        slidesPerView: 2.5,
      },
      960 :{
        slidesPerView: 2.7,
      },
      1060:{
        slidesPerView: 2.9,
      },
      1120:{
        slidesPerView: 3.1,
      },
      1160:{
        slidesPerView: 3.2,
      },
      1200:{
        slidesPerView: 3.4,
      },
      1250:{
        slidesPerView: 3.5,
      },
      1300:{
        slidesPerView: 3.6,
      },
      1350:{
        slidesPerView: 3.8,
      },
      1410:{
        slidesPerView: 4,
      },
    }
  });
  let prodSwiper = new Swiper(".prodSwiper", {
    slidesPerView: 0.9,
    freeMode: true,
    breakpoints: {
      360 :{
        slidesPerView: 1,
      },
      390 :{
        slidesPerView: 1.1,
      },
      420 :{
        slidesPerView: 1.2,
      },
      460 :{
        slidesPerView: 1.3,
      },
      500 :{
        slidesPerView: 1.4,
      },
      520 :{
        slidesPerView: 1.5,
      },
      560 :{
        slidesPerView: 1.6,
      },
      
      600 :{
        slidesPerView: 1.7,
      },
      620 :{
        slidesPerView: 1.8,
      },
      640 :{
        slidesPerView: 1.3,
      },
      690 :{
        slidesPerView: 1.4,
      },
      740 :{
        slidesPerView: 1.5,
      },
      780 :{
        slidesPerView: 1.6,
      },
      830 :{
        slidesPerView: 1.7,
      },
      880 :{
        slidesPerView: 1.8,
      },
      930 :{
        slidesPerView: 1.9,
      },
      970 :{
        slidesPerView: 2,
      },
      1020 :{
        slidesPerView: 2.1,
      },
      1110:{
        slidesPerView: 2.3,
      },
      1170:{
        slidesPerView: 3.1,
      },
      
    }
  });
  }