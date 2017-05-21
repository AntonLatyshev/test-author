const navMenu = () => {

  $('#hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('mobile');
  });

}
export default navMenu;
