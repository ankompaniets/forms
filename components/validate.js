const validate = (values, step) => {

  const errors = {};

  switch (step) {
    case 0:
      if(!values.firstName) {
        errors.firstName = "required";
      }
      if(values.firstName && values.firstName.length < 2) {
        errors.firstName = "Single letter it`s not your name, bro!";
      }
      if(!values.lastName) {
        errors.lastName = "required";
      }
      if(values.lastName && values.lastName.length < 2) {
        errors.lastName = "Single letter it`s not your surname, bro!";
      }
      if(!values.password) {
        errors.password = "required";
      }
      if(values.password && values.password.length < 5) {
        errors.password = "It`s too simple password, bro!";
      }
      if(values.repeatPassword != values.password) {
        errors.repeatPassword = "Must be equal password, bro!";
      }

      break;

    case 1:
     if(!values.email) {
      errors.email = "required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid e-mail address, bro!";
      }
      if(!values.phone) {
        errors.phone = "required";
      } else if(
        !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(values.phone)
      ) {
        errors.phone = "Invalid phone number, bro!";
      }
      if(!values.country) {
        errors.country = "Select your country, bro!";
      }
      if(!values.city) {
        errors.city = "Select your city, bro!";
      }

      break;
      
    case 2:
      if(!values.avatar) {
        errors.avatar = "Download your photo, bro!"
      }
      
      break;
    default:
      break;
  }

  return errors;
};

export default validate;
