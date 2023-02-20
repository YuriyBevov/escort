import Swiper, { Navigation, Thumbs, EffectFade, Pagination } from 'swiper';
Swiper.use([Thumbs, EffectFade, Navigation, Pagination]);

const reviewSlider = document.querySelector('.review-slider');

if(reviewSlider) {

  new Swiper(reviewSlider, {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    initialSlide: 2,
    slidesOffsetBefore: 0,

    navigation: {
      nextEl: ".review-slider-button-next",
      prevEl: ".review-slider-button-prev",
    },

    breakpoints: {

      410: {
        slidesPerView: 'auto',
        slidesOffsetBefore: 0,
      },
      768: {
        slidesPerView: 'auto',
        slidesOffsetBefore: 250,
      }
    }
  });
}
