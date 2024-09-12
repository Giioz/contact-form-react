import { InputRadioProps } from "../../types/formTypes"

export const InputRadio:React.FC<InputRadioProps> = ({value, options, onChange}) => {
  return (
    <div className="md:max-w-[41rem] md:flex md:gap-[1.5rem]">
        {options.map((option) => (
            <label className="radioLabel w-full flex align-center" htmlFor={option.htmlFor} key={option.values}>
                <input className='mt-[2px]' type="radio" id={option.htmlFor} name='chooseOption' value={option.values} onChange={onChange} checked={value === option.values}/>
                {option.values}
            </label>
        ))}
    </div>
  )
}
