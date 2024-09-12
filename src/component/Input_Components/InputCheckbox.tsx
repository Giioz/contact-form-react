import { InputCheckboxProps } from "../../types/formTypes"

export const InputCheckbox: React.FC<InputCheckboxProps> = ({value, onChange}) => {
  return (
    <div className="flex gap-[1rem] items-center my-[1.3rem]">
        <input className="w-[1.5rem] h-[1.5rem] " type="checkbox" name="terms" checked={value} onChange={onChange} />
        <label htmlFor="">I consent to being contracted by the team <span className="text-[#0C7D69]">*</span></label>
    </div>
  )
}
