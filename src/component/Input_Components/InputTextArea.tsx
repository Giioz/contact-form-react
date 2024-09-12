import { InputTextAreaProps } from "../../types/formTypes"

export const InputTextArea: React.FC<InputTextAreaProps> = ({value, onChange}) => {
  return (
    <div>
        <label className="labelText block">Message <span className="text-[#0C7D69]">*</span></label>
        <textarea className='inputSize min-h-[15rem] resize-none md:min-h-[8.25rem]' value={value} onChange={onChange} name="message"></textarea>
    </div>
  )
}
