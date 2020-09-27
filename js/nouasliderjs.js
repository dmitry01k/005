/* nouislider */

const priseSlider = document.querySelector('.price-filter');

noUiSlider.create(priseSlider, {
   start: [5000, 14000],
   step: 1000,
   connect: true,
   tooltips: [true, true],
   range: {
      'min': [1000],
      'max': [20000]
   }
});