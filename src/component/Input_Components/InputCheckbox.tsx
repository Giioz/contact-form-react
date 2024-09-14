import { InputCheckboxProps } from "src/types/formTypes"

export const InputCheckbox: React.FC<InputCheckboxProps> = ({value, onChange, errors}) => {
  return (
    <>
      <div className="flex gap-[1rem] items-center mt-[1.3rem]">
          <input className="w-[1.5rem] h-[1.5rem] " type="checkbox" name="terms" checked={value} onChange={onChange} />
          <label htmlFor="">I consent to being contracted by the team <span className="text-[#0C7D69]">*</span></label>

      </div>
      {errors.checkbox && <span className="text-[#D73C3C]">{errors.checkbox}</span>}
    </>

  )
}
