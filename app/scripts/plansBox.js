const plansBox = () => {

  $('.plans__btn-buy').on('mouseover mouseout', function(){
    $(this).toggleClass('hover').parents('.plans__box').find('.plans__title').toggleClass('hover');
  });

}
export default plansBox;
