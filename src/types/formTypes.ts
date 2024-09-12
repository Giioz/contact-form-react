export interface formType {
    firstName: string,
    lastName: string,
    email: string,
    chooseOption: string,
    message: string,
    terms: boolean,
}


export interface InputText {
    value: string;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputCheckboxProps {
    value: boolean;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTextAreaProps {
    value: string;
    onChange: (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface InputRadioProps {
    value: string;
    options: { values:string, htmlFor:string}[];
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}
  
