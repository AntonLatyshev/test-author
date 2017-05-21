const carousel = () => {

  $('.main-carousel').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.team__list').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1155,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 932,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });

}
export default carousel;
