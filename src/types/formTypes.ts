export interface formType {
    firstName: string,
    lastName: string,
    email: string,
    chooseOption: string,
    message: string,
    terms: boolean,
}

export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    radioOption?: string;
    message?: string;
    checkbox?: string;
  }

// es iterface agararis sachiro, inputfieldprops shi gavaertiane

export interface InputText {
    value?: string;
    errors?: FormErrors,
    options?: { value:string, label: string, attrTexts:string, error?: string, hasErrors: boolean }[]
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputCheckboxProps {
    value: boolean;
    errors: FormErrors,
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTextAreaProps {
    value: string;
    errors: FormErrors,
    onChange: (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface InputFieldProps {
    value: string;
    errors: FormErrors,
    options: { values:string, htmlFor:string}[];
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}
  
