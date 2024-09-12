import { InputText } from "../../types/formTypes";

export default function Validation(values:InputText){
    const errors = {}

    const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(values.name == '') {
        errors = "Please Fill Information"
    }
}