import { InputTextAreaProps } from "../../types/formTypes"

export const InputTextArea: React.FC<InputTextAreaProps> = ({value, onChange, errors}) => {
  return (
    <div>
        <label className="labelText block">Message <span className="text-[#0C7D69]">*</span></label>
        <textarea className='inputSize min-h-[15rem] resize-none md:min-h-[8.25rem]' style={{ borderColor: errors.message? 'red' : '#86A2A5'}} value={value} onChange={onChange} name="message"></textarea>
        {errors.message && <span className="text-[#D73C3C]">{errors.message}</span>}
        
    </div>
  )
}
