
$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      speed: 1000,
      easing: 'ease-in',
      autoplay: true,
      autoplaySpeed: 10000,
      swipe: false

   });
   $('.slider-new').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      dots: true,
      slidesToShow: 4,
      speed: 1000,
      easing: 'ease-in',
      responsive: [
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },

      ]

   });
   $('.slider-sets').slick({
      arrows: true,
      slidesToShow: 1,
      infinite: false,
      dots: true,
      speed: 1000,
      easing: 'ease-in',

   });

   $('.header__burger').click(function (event) {
      $('.header__burger,.header__nav').toggleClass('active');
      $('.page-overlay').toggleClass('page-overlay-active');

      $('body').toggleClass('lock');
   });

   $('.header__dropdown-title').click(function (event) {
      $('.header__dropdown-list').toggleClass('display');
   });

   /* Адаптив картинок */
   function ibg() {

      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }
   ibg();

   /* Акордион header menu*/

   $('.side-trigger').click(function () {
      const itemsIblings = $(this).siblings('.side-section__content');

      if (itemsIblings.hasClass('side-section__active')) {
         itemsIblings.removeClass('side-section__active');
      } else {
         itemsIblings.addClass('side-section__active');
      }
   });

   $('.side-trigger-more').click(function () {
      const itemsIblings = $(this).siblings('.content-checkbox__more');
      const itemsFind = $(this).find('span');


      if (itemsIblings.hasClass('content-checkbox__more--active')) {
         itemsIblings.removeClass('content-checkbox__more--active ');
         itemsFind.html('свернуть');
         $(this).addClass('side-section__more--active');

      } else {
         itemsIblings.addClass('content-checkbox__more--active');
         itemsFind.html('ещё');
         $(this).removeClass('side-section__more--active');

      }
   });

   /* active simple */

   $('.product-item__simile').click(function (event) {
      $(this).toggleClass('active-simple');
   });

   $('.product-button__favorit--active').click(function (event) {
      $(this).toggleClass('active-simple-white');
   });

   /* filter products */

   $('.products-title-mobile').click(function (event) {
      $('.page__side ').toggleClass('active');
      $('.page-overlay').addClass('page-overlay-active');

      $('body').toggleClass('lock');
   });

   $('.side-close-svg').click(function (event) {
      $('.page__side ').removeClass('active');
      $('.page-overlay').removeClass('page-overlay-active');
      $('body').removeClass('lock');
   });

   /* search */
   $('.actions-header__search').click(function (event) {
      $('.search-block-wrapper').toggleClass('search-active');
      $('.actions-header__search').toggleClass('actions-active');
      $('.actions-header__search').toggleClass('active-s');
      $('body').toggleClass('lock');
   });

   /* Select */
   $(function () {
      $(".select-quantity__button").on("click", function () {
         var $button = $(this);
         var oldValue = $button.parent().siblings("input").val();

         if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
         } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
               var newVal = parseFloat(oldValue) - 1;
            } else {
               newVal = 0;
            }
         }
         $button.parent().siblings("input").val(newVal);
      });
   });

   /* Акордион products  */
   //прикрепляем клик по заголовкам acc-head
   $('.acc-description .acc-title').on('click', f_acc);

   function f_acc() {
      //скрываем все кроме того, что должны открыть
      $('.acc-description .acc-text').not($(this).next()).slideUp(500);
      // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(500);
   }

   /* Видео в модальном окне */

   $('.videos a').click(function (event) {
      event.preventDefault();
      var videoSrc = $(this).attr('href');
      $('.popup-video').html('<iframe  src="' + videoSrc + '"></iframe>');
      // далее показываете модалку
      $('.overlay_popup').fadeIn(500);
      $('.popup-video').slideDown(1000);
      $('body').addClass('lock');
   });

   $('.overlay_popup').click(function () { // Обрабатываем клик по заднему фону
      $('.overlay_popup, .popup-video').fadeOut(400); // Скрываем затемнённый задний фон и основное всплывающее окно
      $('body').removeClass('lock');
      $('.popup-video iframe').remove(1000);

   })

   /* Смена картинок */
   $('.image-product').click(function (event) {
      var imgSrc = $(this).attr('src');
      if (!$(this).hasClass('active-photo')) {
         $(this).siblings().removeClass('active-photo');
         $(this).addClass('active-photo');
      }
      $('.image-product-big').attr('src', imgSrc);
      $('.product-image__main').css('backgroundImage', 'url(' + imgSrc + ')');
   });
});


