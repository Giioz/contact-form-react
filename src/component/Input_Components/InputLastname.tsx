import { InputText } from "../../types/formTypes"

export const InputLastname: React.FC<InputText> = ({value, onChange, errors}) => {
  return (
    <div className="md:w-[20rem]">
        <label className="labelText block" htmlFor="lastName">Last Name <span className="text-[#0C7D69]">*</span></label>
        <input className="inputSize w-full" type="text" name="lastName" value={value} onChange={onChange}/>
        {errors.lastName && <span className="text-[#D73C3C]">{errors.lastName}</span>}

    </div>
  )
}
