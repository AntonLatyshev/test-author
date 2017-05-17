const header = () => {

  $(window).scroll(function () {
    $('.header').removeClass('sticky');
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  })

}
export default header;
