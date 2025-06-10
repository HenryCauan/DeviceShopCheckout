import { useState } from 'react';

const Information = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('defaultValue');
    const [postalCode, setPostalCode] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleReset = () => {
        setName('');
        setEmail('');
        setCountry('defaultValue');
        setPostalCode('');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Fecha o popup após 3 segundos
    };

    return (
        <>
            <div className="w-full h-full flex flex-col gap-8 p-12 text-gray-800">
                <h1 className="text-2xl font-semibold">Contact Information</h1>
                <label htmlFor="" className="font-semibold">
                    <h1>First & Last name</h1>
                    <input
                        className="w-full flex relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4 focus:outline-none"
                        type="text"
                        placeholder="Enter first & last name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="" className="font-semibold">
                    <h1>Email Address</h1>
                    <input
                        className="w-full flex relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4 focus:outline-none"
                        type="text"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <div className="w-full flex md:flex-row flex-col gap-8">
                    <label htmlFor="" className="flex flex-col flex-1 font-semibold">
                        <h1>Country</h1>
                        <select
                            className="flex-1 relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal py-5 pl-4 focus:outline-none"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="Finlandw">Finland</option>
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
                            className="flex-1 w-full relative bg-[color:#e6e7eb] rounded-[10px] border-2 border-gray-400 h-16 mt-4 placeholder:font-normal pl-4 py-5 focus:outline-none"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={5}
                            placeholder="Enter postal code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            onKeyDown={(e) => {
                                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                                    e.preventDefault();
                                }
                            }}
                        />
                    </label>
                </div>
                <button 
                    className="w-full py-6 text-center bg-[color:#1d1d1f] text-white rounded-[10px] font-semibold"
                    onClick={handleReset}
                >
                    Continua
                </button>
            </div>

            {showPopup && (
                <div className="absolute mx-auto inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="bg-black p-6 rounded-lg shadow-lg">
                        <p>Formulário resetado com sucesso!</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Information;