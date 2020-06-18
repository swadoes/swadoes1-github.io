$(function () {
  $('btn_menu_b').on('click', function () {

    $('menu_b').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});
$(function () {
  $('.btn_menu').on('click', function () {

    $('.menu').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });
});