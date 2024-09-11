import './Form.css'
import { FormButton } from './Input_Components/FormButton'
import { InputCheckbox } from './Input_Components/InputCheckbox'
import { InputEmail } from './Input_Components/InputEmail'
import { InputFirstname } from './Input_Components/InputFirstname'
import { InputLastname } from './Input_Components/InputLastname'
import { InputRadioGeneral } from './Input_Components/InputRadioGeneral'
import { InputRadioSupport } from './Input_Components/InputRadioSupport'
import { InputTextArea } from './Input_Components/InputTextArea'

export const Form = () => {
  return (
    <div className="max-w-[45.5rem] h-auto p-[1.5rem] bg-white mx-sm my-[2rem] rounded-[1rem] md:max-w-[46rem] md:mx-[3rem] md:p-[40px]" id='form'>
        <h1 className="text-[2rem] bold tracking-[-0.0625rem]">Contact Us</h1>
        <form className="max-w-full mt-[2rem] flex gap-[1.5rem] flex-col">
            {/* first-last name group div */}
            <div className="w-[100%] flex gap-[1.5rem] flex-col md:flex-row">
                <InputFirstname />
                <InputLastname />
            </div>
            {/* email */}
            <InputEmail />
            {/* radio group div */}
            <div>
                <label className="labelText block">Query Type <span className="text-[#0C7D69]">*</span></label>
                <div className='md:flex md:gap-[1.5rem]'>
                    <InputRadioGeneral />
                    <InputRadioSupport />
                </div>
            </div>
            <InputTextArea />
            <InputCheckbox />
            <FormButton />
        </form>
    </div>
  )
}
