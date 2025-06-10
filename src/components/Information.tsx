const Information = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-8 p-12 text-gray-800">
                <h1 className="text-2xl font-semibold">Contact Information</h1>
                <label htmlFor="" className="font-semibold">
                    <h1>First & Last name</h1>
                    <input 
                        className="w-full flex relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                        type="text" 
                        placeholder="Enter first & last name" 
                    />
                </label>
                <label htmlFor="" className="font-semibold">
                    <h1>Email Address</h1>
                    <input 
                        className="w-full flex relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                        type="text" 
                        placeholder="Enter email address" 
                    />
                </label>
                <div className="w-full flex gap-8">
                    <label htmlFor="" className="flex flex-col flex-1 font-semibold">
                        <h1>Country</h1>
                        <select 
                            className="flex-1 relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4 " 
                        >
                            <option value="" disabled selected>Select a country</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Germany">Germany</option>
                        </select>
                    </label>
                    <label htmlFor="" className="flex flex-col flex-1 font-semibold">
                        <h1>Postal Code</h1>
                        <input 
                            className="flex-1 relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4 py-5" 
                            type="text" 
                            placeholder="Enter postal code" 
                        />
                    </label>
                </div>
                <button className="w-full py-6 text-center bg-[color:#1d1d1f] text-white rounded-[10px] font-semibold">Continua</button>
            </div>
        </>
    )
}  

export default Information;