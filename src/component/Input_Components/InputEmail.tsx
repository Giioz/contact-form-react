import { InputText } from "../../types/formTypes"

export const InputEmail: React.FC<InputText> = ({value, onChange}) => {
  return (
    <div>
        <label className="labelText block" htmlFor="email">Email Adress <span className="text-[#0C7D69]">*</span></label>
        <input className="inputSize" type="email" name="email" value={value} onChange={onChange}/>
    </div>
  )
}


