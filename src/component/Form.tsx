import { useState } from 'react'
import './Form.css'
import { FormButton } from './Input_Components/FormButton'
import { InputCheckbox } from './Input_Components/InputCheckbox'
import { InputEmail } from './Input_Components/InputEmail'
import { InputFirstname } from './Input_Components/InputFirstname'
import { InputLastname } from './Input_Components/InputLastname'
import { InputTextArea } from './Input_Components/InputTextArea'
import { FormErrors, formType } from '../types/formTypes'
import { InputRadio } from './Input_Components/InputRadio'
import Validation from './validations/Validation'

export const Form = () => {

  const [formValues, setFormValues] = useState<formType>({
        firstName: '',
        lastName: '',
        email: '',
        chooseOption: '',
        message: '',
        terms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setFormValues({
            ...formValues,
            [name] : value
        });
  }
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked} = e.target
            setFormValues({
                ...formValues,
                [name] : checked
            });
    }
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name] : value
        })
  }
  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = Validation(formValues)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Data", formValues);
          } else {
            console.log("Form didnt submit");
          }

  }


  return (
    <div className="max-w-[45.5rem] h-auto p-[1.5rem] bg-white mx-sm my-[2rem] rounded-[1rem] md:max-w-[46rem] md:mx-[3rem] md:p-[40px]" id='form'>
        <h1 className="text-[2rem] bold tracking-[-0.0625rem]">Contact Us</h1>
        <form className="max-w-full mt-[2rem] flex gap-[1.5rem] flex-col" onSubmit={handleSubmit}>
            {/* first-last name group div */}
            <div className="w-[100%] flex gap-[1.5rem] flex-col md:flex-row">
                <InputFirstname value={formValues.firstName} onChange={handleInputChange} errors={errors}/>

                <InputLastname value={formValues.lastName} onChange={handleInputChange} errors={errors}/>
            </div>
            {/* email */}
            <InputEmail value={formValues.email} onChange={handleInputChange} errors={errors}/>
            {/* radio group div */}
            <div>
                <label className="labelText block">Query Type <span className="text-[#0C7D69]">*</span></label>
                <div className=''>
                    <InputRadio 
                        value={formValues.chooseOption} 
                        onChange={handleInputChange}
                        errors={errors}
                        options={[
                            {htmlFor : 'generalEnquiry', values: 'General Enquiry'},
                            {htmlFor : 'supportRequest', values: 'Support Request'}
                        ]}
                        />
                </div>
            </div>
            <InputTextArea value={formValues.message} onChange={handleTextAreaChange} errors={errors}/>
            <InputCheckbox value={formValues.terms} onChange={handleCheckboxChange} errors={errors}/>
            <FormButton />
        </form>
    </div>
  )
}
