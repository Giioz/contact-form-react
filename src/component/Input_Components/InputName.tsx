import { InputText } from "src/types/formTypes"

export const InputName: React.FC<InputText> = ({onChange, options}) => {
  return (
    <>
        {options?.map((option) => (
        <div className="md:w-[20rem]" key={option.attrTexts}>
            <label className="labelText block" htmlFor={option.attrTexts} key={option.value}>{option.label}<span className="text-[#0C7D69]">*</span></label>
            <input className="inputSize w-full" type="text" style={{ borderColor: option.hasErrors? 'red' : '#86A2A5'}} name={option.attrTexts} value={option.value} onChange={onChange}/>
            {option.error && <span className="text-[#D73C3C]">{option.error}</span>}
        </div>
        ))}
    </>
  )
}