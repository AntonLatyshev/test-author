const validateForm = () => {

  $('.contact__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    }
  });

}
export default validateForm;
