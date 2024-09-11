export const InputRadioGeneral = () => {
  return (
    <div className="md:w-[20rem]">
        <label className="radioLabel flex align-center" htmlFor='generalEnquiry'>
            <input className='mt-[2px]' type="radio" id='generalEnquiry' name='group1' />
            General Enquiry
        </label>
    </div>
  )
}
