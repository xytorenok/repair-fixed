$(document).ready(function () {
  $('.select-list').select2();
  //  -----drop-menu
  $('.tab').click(function (event) {
    event.preventDefault(); //віключение перезагрузки страниці
    $('.tab').removeClass('active');
    $('.main-menu__drop').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

  });
  $('.header__mobile-menu').click(function () {
    $('.header__mobile-menu-line').toggleClass('active');
    $('.main-menu').toggleClass('active');
  });

  $('.mobile-menu').click(function () {
    $('.mobile-menu span').toggleClass('active');
  });

  $('.masters').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev btn'><img src='img/arrow-slider-left.svg'></button>",
    nextArrow: "<button type='button' class='slick-next btn'><img src='img/arrow-slider-right.svg'></button>",
    responsive: [{
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.question__tab-title').click(function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(500);
  })

  $('.map__block-contact').click(function (event) {
    event.preventDefault();
    $('.map__block-contact').removeClass('active');
    $('.map__right').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.task-master__wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('.repair__wrapper-right').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<button type='button' class='repair-prev btn'><img src='img/repair-arrow-left.svg'></button>",
    nextArrow: "<button type='button' class='repair-next btn'><img src='img/repair-arrow-right.svg'></button>",
    responsive: [{
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        dots: false,
        arrows: false
      }
    },
  ]
  });

  $('.our-quality__block').click(function (event) {
    event.preventDefault();
    $('.our-quality__block').removeClass('active');
    $('.our-quality__wrapper-right-block').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.call-to-master').click(function (event) {
    event.preventDefault();
    $('.pop-up-master').addClass('open');
    $('body').addClass('overlay');
  });

  $('.btn-close').click(function () {
    $('.pop-up-master').removeClass('open');
    $('body').removeClass('overlay');
  })

  $('.mobile-menu').click(function () {
    $('.header__wrapper').toggleClass('active');
    $('.nav-mobile').toggleClass('active');
    $('body').toggleClass('overlay');
  })

});