import './Form.css'

export const Form = () => {
  return (
    <div className="max-w-[21.499rem] h-auto p-[1.5rem] bg-white mx-auto my-[2rem] rounded-[1rem]">
        <h1 className="text-[2rem] bold tracking-[-0.0625rem]">Contact Us</h1>
        <form className="max-w-full mt-[2rem] flex gap-[1.5rem] flex-col">
            {/* first-last name group div */}
            <div className="flex gap-[1.5rem] flex-col">
                <div>
                    <label className="labelText block" htmlFor="firstName">First Name <span className="text-[#0C7D69]">*</span></label>
                    <input className="inputSize" type="text" name="firstName" />
                </div>
                <div>
                    <label className="labelText block" htmlFor="lastName">Last Name <span className="text-[#0C7D69]">*</span></label>
                    <input className="inputSize" type="text" name="lastName" />
                </div>
            </div>
            {/* email */}
            <div>
                <label className="labelText block" htmlFor="email">Email Adress <span className="text-[#0C7D69]">*</span></label>
                <input className="inputSize" type="email" name="email" />
            </div>
            {/* radio group div */}
            <div className=''>
                <label className="labelText block">Query Type <span className="text-[#0C7D69]">*</span></label>
                <div>
                    <div>
                        <label className="radioLabel flex align-center" htmlFor='generalEnquiry'>
                            <input className='mt-[2px]' type="radio" id='generalEnquiry' name='group1' />
                            General Enquiry
                        </label>
                    </div>
                    <div>
                        <label className="radioLabel flex align-center" htmlFor='supportRequest'>
                            <input className='mt-[2px]' type="radio" id='supportRequest' name='group1'/>
                            Support Request
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
