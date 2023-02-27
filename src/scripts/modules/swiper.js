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

const thumbSlider = document.querySelector('.thumb-slider');
if(thumbSlider) {

  let sliderThumbs = new Swiper(".thumb-slider-thumbs", {
    slidesPerView: 'auto',
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 3,
    direction: 'vertical',
  });

  let slider = new Swiper(".thumb-slider", {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      spaceBetween: 25,

      breakpoints: {
        635: {
          direction: 'vertical',
        },
      },

      navigation: {
        nextEl: '.thumb-slider-thumbs-button-next',
        prevEl: '.thumb-slider-thumbs-button-prev',
      },

      thumbs: {
        swiper: sliderThumbs
      }
  });
}
