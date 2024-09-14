import { InputText } from "../../types/formTypes"

export const InputEmail: React.FC<InputText> = ({value, onChange, errors}) => {
  return (
    <div>
        <label className="labelText block" htmlFor="email">Email Adress <span className="text-[#0C7D69]">*</span></label>
        <input className="inputSize" style={{ borderColor: errors?.email? 'red' : '#86A2A5'}} type="email" name="email" value={value} onChange={onChange}/>
        {errors?.email && <span className="text-[#D73C3C]">{errors.email}</span>}

    </div>
  )
}


