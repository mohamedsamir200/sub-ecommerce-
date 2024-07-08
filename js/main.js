//https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=7aa47736a5c7467e84f057c8409deaf3

// https://jsonplaceholder.typicode.com/users

// https://jsonplaceholder.typicode.com/todos?userId=7

//========================= 1 ============================//

const swiper1 = new Swiper('.swiper-1 .slider-swiper', {

    loop: true,
    spaceBetween : 20 ,
    grabCursor : true ,
    // If we need pagination
    pagination: {
      el: '.swiper-1 .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-1 .swiper-button-next',
      prevEl: '.swiper-1 .swiper-button-prev',
    },
    keyboard : {
        enabled :true 
      },
      autoplay : {
        delay : 2500 ,
        pauseOnMouseEnter : true ,
      },
      pagination: {
        el: '.swiper-1 .swiper-pagination',
        dynamicBullets: true , 
        clickable : true ,
      },
    breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      }
  });

  const swiper2 = new Swiper('.swiper-2 .slider-swiper', {

    loop: true,
    spaceBetween : 20 ,
    grabCursor : true ,
    // If we need pagination
    pagination: {
      el: '.swiper-2 .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-2 .swiper-button-next',
      prevEl: '.swiper-2 .swiper-button-prev',
    },
    keyboard : {
        enabled :true 
      },
      autoplay : {
        delay : 2500 ,
        pauseOnMouseEnter : true ,
      },
      pagination: {
        el: '.swiper-2 .swiper-pagination',
        dynamicBullets: true , 
        clickable : true ,
      },
    breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      }
  });

