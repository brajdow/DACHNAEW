$(document).ready(function(){
  $('.main__testmonials-content').slick({
    arrows: true,
    dots: true,  
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    adaptiveHeight: true, // чтобы высота подстраивалась под контент
    appendDots: $('.testmonials__dots'),
    prevArrow: $('.testmonials__prev'),
    nextArrow: $('.testmonials__next'),
    responsive: [
    {
      breakpoint: 620,
      settings: {
        draggable: true,
        arrows: false,
      }
    }
    ]
  });
  $('.faq__questions-item').on('click', function(e) {
    // Предотвращаем клик, если кликнули на ссылку/кнопку внутри (опционально)
    if ($(e.target).closest('a, button').length) return;

    const $this = $(this);
    
    // Если текущий уже активен — просто закрываем
    if ($this.hasClass('faq__questions-item--active')) {
        $this.removeClass('faq__questions-item--active');
        return;
    }
    
    // Закрываем все открытые
    $('.faqquestions-item--active').removeClass('faq___questions-item--active');
    
    // Открываем текущий
    $this.addClass('faq__questions-item--active');
});
$('.dropdown__btn').on('click', function(e) {
    e.preventDefault();
    var $menu = $(this).next('.dropdown__menu');
    if ($menu.is(':visible')) {
        $menu.slideUp();  // скрываем — тут display станет none, это нормально
    } else {
        $menu.slideDown(400, function() {
            $(this).css('display', 'flex');
        });
    }
});
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__top-article');
    
    function closeMenu() {
        menu.classList.remove('header__top-article--open');
        burger.classList.remove('burger--active');
    }
    
    function openMenu() {
        menu.classList.add('header__top-article--open');
        burger.classList.add('burger--active');
    }
    
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        if (menu.classList.contains('header__top-article--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
});