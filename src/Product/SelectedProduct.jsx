import { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import Subscribe from "../Components/Subscribe";
import { ProductList } from "../constants";
import { addToLS } from "../utilities/localStorage";

// const ProductList = [
//     {
//         id:"10061",
//         image:"/assets/images/selected-porduct.png",
//         title:"Liposomal Vitamin C",
//         price: {"500":"4332.32","200":"2332.32","100":"1332.32",},
//         desc:['Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body.','This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.','It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.'],
//         sizes:['100','200','500'],
//         flavors:['orange' , 'berry' ,'lemon' ]
//     }
// ]


const SelectedProduct = () => {
    const selectedItem = ProductList.find(item => item.id == "10061")
    const [activeButton, setActiveButton] = useState("500");
    const [selectedFlavor, setSelectedFlavor] = useState(selectedItem.flavors[0]);
    const [price, setprice] = useState("4332")

    const handleSelectSize = (productQuantity) => {
        setActiveButton(productQuantity);
        
    };

    useEffect(()=>{
        const newPrice = selectedItem.price[activeButton]
        setprice(newPrice)
    },[activeButton])

    const handleRadioChange = (event) => {
        setSelectedFlavor(event.target.value);
    };

    const handleAddToCart=(id,image,title) => {
        
        const newCartItem = {
            id,
            image,
            title,
            size:activeButton,
            price,
            flavor:selectedFlavor,
            quantity: 1
        }
        console.log(newCartItem)
        addToLS(newCartItem);
    }
    useEffect(() => {
        console.log(selectedFlavor)
    }, [selectedFlavor])

    const inActiveButtonStyle = "px-4 py-[10px] bg-white border border-accent text-accent"
    const activeButtonStyle = "px-4 py-[10px] bg-accent border border-accent text-white"
    return (
        <div className="text-[14px] lg:text-[16px]">
            <div className="max-w-custom w-full mx-auto py-4 px-4 md:px-12">
                {/* inner container */}
                <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-3">
                    {/* left */}
                    <div className="flex flex-col justify-start items-center w-full lg:w-[50%]">
                        {/* product image */}
                        <img src={selectedItem.image} alt="" />
                        {/* slider */}
                        <Slider />
                    </div>
                    {/* right */}
                    <div className="flex flex-col justify-start items-start w-full lg:w-[50%] ">
                        {/* see all reviews */}
                        <div className="w-full flex flex-start justify-start items-start gap-3">
                            <img src="/assets/icons/rating.png" alt="" />
                            <u>see all ratings</u>
                        </div>
                        {/* product title */}
                        <h1 className="text-[24px] md:text-[40px] italic">{selectedItem.title}</h1>
                        {/* price */}
                        <h3 className="text-[20px] lg:text-[32px] italic"><span className="text-[16px] lg:text-[24px]">BDT</span> {price}</h3>
                        {/* desc */}
                        <div className="flex flex-col justify-start items-start gap-2 w-full py-4 text-[14px] lg:text-[16px]">
                            {
                                selectedItem.desc.map((item_desc) => {
                                    return (
                                        <p>{item_desc}</p>
                                    )
                                })
                            }
                        </div>
                        {/* select size */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="w-[100px]">
                                <p>Select Size:</p>
                            </div>
                            {/* buttons */}
                            <div className="flex justify-start items-start gap-2">
                                {
                                    selectedItem.sizes.map((size) => {
                                        return (
                                            <button onClick={() => handleSelectSize(size)} className={activeButton == size ? activeButtonStyle : inActiveButtonStyle}>{size}ml</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* select flavor */}

                        <div className="flex justify-start items-center gap-4 text-[12px] lg:text-[16px]">
                            <div className="w-[100px]">
                                <p>Select Flavor:</p>
                            </div>
                            {/* radio */}
                            <form className="flex justify-start items-start gap-2">
                                {
                                    selectedItem.flavors.map((flav) => {
                                        return (
                                            <div className="form-control">
                                                <label className="label cursor-pointer gap-2">
                                                    <input type="radio" name="radio-10" className="radio checked:bg-green-900"
                                                        onClick={handleRadioChange} value={flav} defaultChecked />
                                                    <span className="label-text text-[12px] lg:text-[16px]">{flav}</span>
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </form>
                        </div>

                        {/* add to cart */}
                        <div className="flex justify-center items-center w-full bg-accent text-white py-2 px-6 mt-4 ">
                            <button className="text-xl bg-transparent border-none italic">-</button>
                            <button onClick={()=>{handleAddToCart(selectedItem.id,selectedItem.image,selectedItem.title)}} className="text-[24px] w-full">Add To Cart</button>
                            <button className="text-xl bg-transparent border-none italic">+</button>
                        </div>
                        {/* pickup */}
                        <div className="py-10 ">
                            <p className="pb-2">Pickup available at our <span className="font-semibold">22 Bistro Place, Banani</span></p>
                            <p className="text-[12px]">Usually ready In 2-4 days</p>
                        </div>
                        {/* subscribe */}
                        <Subscribe />
                        {/* more info */}
                        <img src="/assets/icons/moreInfo.png" className="w-full mt-10" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SelectedProduct