import { InputFieldProps } from "src/types/formTypes"

export const InputRadio:React.FC<InputFieldProps> = ({value, options, onChange,errors}) => {
  return (
    <>
      <div className="md:max-w-[41rem] md:flex md:gap-[1.5rem]">
          {options.map((option) => (
              <label className="radioLabel w-full flex align-center" htmlFor={option.htmlFor} key={option.values}>
                  <input className='mt-[2px]' type="radio" id={option.htmlFor} name='chooseOption' value={option.values} onChange={onChange} checked={value === option.values}/>
                  {option.values}
              </label>
              
          ))}

      </div>
      {errors.radioOption && <span className="text-[#D73C3C]">{errors.radioOption}</span>}
    </>

  )
}
