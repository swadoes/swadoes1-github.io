$(function () {
  $('btn_menu_b').on('click', function () {

    $('footer_menu__list').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });
  $('.btn_menu').on('click', function () {

    $('.menu').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });

});
