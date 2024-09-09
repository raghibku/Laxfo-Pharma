import { useState } from "react";
import Slider from "../Components/Slider";
import Subscribe from "../Components/Subscribe";


const SelectedProduct = () => {
    const [activeButton, setActiveButton] = useState(3);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };
    const inActiveButtonStyle = "px-4 py-[10px] bg-white border border-accent text-accent"
    const activeButtonStyle = "px-4 py-[10px] bg-accent border border-accent text-white"
    return (
        <div className="">
            <div className="max-w-custom w-full mx-auto py-4 px-12">
                {/* inner container */}
                <div className="flex justify-center items-start w-full gap-3">
                    {/* left */}
                    <div className="flex flex-col justify-start items-center w-[50%]">
                        {/* product image */}
                        <img src="/src/assets/images/selected-porduct.png" alt="" />
                        {/* slider */}
                        <Slider/>
                    </div>
                    {/* right */}
                    <div className="flex flex-col justify-start items-start w-[50%] ">
                        {/* see all reviews */}
                        <div className="w-full flex flex-start justify-start items-start gap-3">
                            <img src="/src/assets/icons/rating.png" alt="" />
                            <u>see all ratings</u>
                        </div>
                        {/* product title */}
                        <h1 className="text-[40px] italic">Liposomal Vitamin C</h1>
                        {/* price */}
                        <h3 className="text-[32px] italic"><span className="text-[24px]">BDT</span> 4332.32</h3>
                        {/* desc */}
                        <div className="flex flex-col justify-start items-start gap-2 w-full py-4">
                            <p>
                                Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body. </p>
                            <p>
                                This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues. </p>
                            <p>
                                It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.
                            </p>
                        </div>
                        {/* select size */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="w-[100px]">
                                <p>Select Size:</p>
                            </div>
                            {/* buttons */}
                            <div className="flex justify-start items-start gap-2">
                                <button onClick={() => handleButtonClick(1)} className={activeButton == '1' ? activeButtonStyle : inActiveButtonStyle}>100ml</button>
                                <button onClick={() => handleButtonClick(2)} className={activeButton == '2' ? activeButtonStyle : inActiveButtonStyle}>200ml</button>
                                <button onClick={() => handleButtonClick(3)} className={activeButton == '3' ? activeButtonStyle : inActiveButtonStyle}>500ml</button>
                            </div>
                        </div>
                        {/* select flavor */}
                        
                        <div className="flex justify-start items-center gap-4">
                            <div className="w-[100px]">
                                <p>Select Flavor:</p>
                            </div>
                            {/* radio */}
                            <div className="flex justify-start items-start gap-2">
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="radio" name="radio-10" className="radio checked:bg-green-900" defaultChecked />
                                        <span className="label-text">Orange</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="radio" name="radio-10" className="radio checked:bg-green-900" defaultChecked />
                                        <span className="label-text">Blue berry</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="radio" name="radio-10" className="radio checked:bg-green-900" defaultChecked />
                                        <span className="label-text">Lime</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* add to cart */}
                        <div className="flex justify-center items-center w-full bg-accent text-white py-2 px-6 mt-4 ">
                            <button className="text-xl bg-transparent border-none italic">-</button>
                            <button className="text-[24px] w-full">Add To Cart</button>
                            <button className="text-xl bg-transparent border-none italic">+</button>
                        </div>
                        {/* pickup */}
                        <div className="py-10 ">
                            <p className="pb-2">Pickup available at our <span className="font-semibold">22 Bistro Place, Banani</span></p>
                            <p className="text-[12px]">Usually ready In 2-4 days</p>
                        </div>
                        {/* subscribe */}
                        <Subscribe/>
                        {/* more info */}
                        <img src="/src/assets/icons/moreInfo.png" className="w-full mt-10" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SelectedProduct