import { formType } from "../../types/formTypes";

export default function Validation(values:formType){
    const errors: { [key: string]: string } = {}; 

    const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if (values.firstName.trim() === '') {
    errors.firstName = "First name is required.";
  }
  if (values.lastName.trim() === '') {
    errors.lastName = "Last name is required.";
  }
  if (!email_validation.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.chooseOption) {
    errors.radioOption = "Please select an option.";
  }
  if (values.message.trim() === '') {
    errors.message = "Message is required.";
  }
  if (!values.terms) {
    errors.checkbox = "You must agree to the terms.";
  }
    

    return errors
}