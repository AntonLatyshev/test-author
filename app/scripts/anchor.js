const anchor = () => {

  $('a[data-target^="anchor"]').on('click', function () {
    $('a[data-target^="anchor"]').parents('li').removeClass('active');
    $(this).parents('li').addClass('active');
    setTimeout(function() {
      $('a[data-target^="anchor"]').parents('li').removeClass('active');
      $('a[data-target^="anchor"]').parents('.header__list').find('li').eq(0).addClass('active');
    }, 2000);
    var target = $(this).attr('href');
    var headerHeight = $('.header').height();
    var destination = $(target).offset().top - headerHeight;
    $('body, html').animate({ scrollTop: destination }, 1000);
    return false;
  })

}
export default anchor;
