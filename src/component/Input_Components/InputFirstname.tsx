import { InputText } from "../../types/formTypes"


export const InputFirstname: React.FC<InputText>= ({value, onChange}) => {
  return (
    <div className="md:w-[20rem]">
        <label className="labelText block" htmlFor="firstName">First Name <span className="text-[#0C7D69]">*</span></label>
        <input className="inputSize md:w-full" type="text" name="firstName" value={value} onChange={onChange} />
    </div>
  )
}
