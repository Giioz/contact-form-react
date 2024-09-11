
export const InputFirstname = () => {
  return (
    <div className="md:w-[20rem]">
        <label className="labelText block" htmlFor="firstName">First Name <span className="text-[#0C7D69]">*</span></label>
        <input className="inputSize md:w-full" type="text" name="firstName" />
    </div>
  )
}
