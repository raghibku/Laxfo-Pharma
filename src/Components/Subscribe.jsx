import { useState } from "react";


const Subscribe = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };
    const inActiveButtonStyle = "bg-gray-300 px-3 py-3 rounded-full mt-[4px]"
    const activeButtonStyle = "bg-accent px-3 py-3 rounded-full mt-[4px]"
    return (
        <div className="w-full flex flex-col justify-start items-start gap-2 text-[12px] md:text-[16px]">
            {/* subscribe and save */}
            <div className={`py-4 border-b border-[#D9D9D9] flex justify-between  items-start w-full ${activeButton != '1' && 'text-[#D9D9D9]' }`}>
                <div className="flex justify-start items-start gap-2">
                    <button onClick={() => handleButtonClick(1)} className={activeButton == '1' ? activeButtonStyle : inActiveButtonStyle}> </button>
                    <div >
                        <p>Subscribe and Save 10%</p>
                        <p>Free Shipping + Cancel Anytime</p>
                        <u className="uppercase">Your Subscription Perks +</u>
                    </div>
                </div>
                <h1 className="text-[16px] md:text-[20px] font-semibold">BDT 800</h1>
            </div>
            {/* one time purchase */}
            <div className={`py-4 border-b flex justify-between items-start w-full ${activeButton != '2' && 'text-[#D9D9D9]' }`} >
                <div className="flex justify-start items-start gap-2">
                    <button onClick={() => handleButtonClick(2)} className={activeButton == '2' ? activeButtonStyle : inActiveButtonStyle}> </button>
                    <div >
                        <p>One Time Purchase</p>
                        <p className="text-wrap">or four interest-free payments of BDT 20 with sezzle</p>
                    </div>
                </div>
                <h1 className="text-[16px] md:text-[20px] font-semibold text-nowrap">BDT 200</h1>
            </div>
        </div>
    )
}

export default Subscribe