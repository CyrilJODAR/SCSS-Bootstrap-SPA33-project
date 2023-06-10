var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });