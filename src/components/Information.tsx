const Information = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-8 p-12 text-gray-800">
                <h1 className="text-2xl font-semibold">Contact Information</h1>
                <label htmlFor="" className="font-semibold">
                    <h1>First & Last name</h1>
                    <input 
                        className="w-full flex relative rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                        type="text" 
                        placeholder="Enter first & last name" 
                    />
                </label>
                <label htmlFor="" className="font-semibold">
                    <h1>Email Address</h1>
                    <input 
                        className="w-full flex relative rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                        type="text" 
                        placeholder="Enter email address" 
                    />
                </label>
                <div className="w-full flex gap-8">
                    <label htmlFor="" className="font-semibold">
                        <h1>Country</h1>
                        <input 
                            className="w-full flex relative rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                            type="text" 
                            placeholder="Enter country" 
                        />
                    </label>
                    <label htmlFor="" className="font-semibold">
                        <h1>Postal Code</h1>
                        <input 
                            className="w-full flex relative rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4" 
                            type="text" 
                            placeholder="Enter postal code" 
                        />
                    </label>
                </div>
                <button className="w-full py-6 text-center bg-gray-800 text-white rounded-[10px] font-semibold">Continua</button>
            </div>
        </>
    )
}  

export default Information;