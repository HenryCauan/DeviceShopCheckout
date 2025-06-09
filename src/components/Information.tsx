const Information = () => {
    return (
        <>
            <div className="w-full h-full gap-4">
                <label htmlFor="">
                    <h1>First & Last name</h1>
                    <input type="text" placeholder="Enter first & last name" />
                </label>
                <label htmlFor="">
                    <h1>Email Address</h1>
                    <input type="text" placeholder="Enter email address" />
                </label>
                <div className="w-full flex">
                    <label htmlFor="">
                        <h1>Country</h1>
                        <input type="text" placeholder="Enter email address" />
                    </label>
                    <label htmlFor="">
                        <h1>Postal Code</h1>
                        <input type="text" placeholder="Enter email address" />
                    </label>
                </div>
                <button className="w-full py-4 text-center bg-gray-800 text-white">COntinua</button>
            </div>
        </>
    )
}