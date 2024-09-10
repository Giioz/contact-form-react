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
    <div className="max-w-[21.499rem] h-auto p-[1.5rem] bg-white mx-auto my-[2rem] rounded-[1rem]">
        <h1 className="text-[2rem] bold tracking-[-0.0625rem]">Contact Us</h1>
        <form className="max-w-full mt-[2rem] flex gap-[1.5rem] flex-col">
            {/* first-last name group div */}
            <div className="flex gap-[1.5rem] flex-col">
                <InputFirstname />
                <InputLastname />
            </div>
            {/* email */}
            <InputEmail />
            {/* radio group div */}
            <div className=''>
                <label className="labelText block">Query Type <span className="text-[#0C7D69]">*</span></label>
                <div>
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
