const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    autoplay: true,
    // spaceBetween: 20,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints:{
        600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
    }
  });


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 20,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     breakpoints: {
        // 600: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     allowSlideNext: true,
        //     allowSlidePrev: true,
        // },
//         1000: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             allowSlideNext: false,
//             allowSlidePrev: false,
//         },
//     }
//   });