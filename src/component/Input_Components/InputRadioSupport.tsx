
export const InputRadioSupport = () => {
  return (
    <div className="md:w-[20rem]">
        <label className="radioLabel flex align-center" htmlFor='supportRequest'>
            <input className='mt-[2px]' type="radio" id='supportRequest' name='group1'/>
            Support Request
        </label>
    </div>
  )
}
