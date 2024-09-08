import ProductCard from "../Components/ProductCard"
import { FrequentlyBoughtProducts } from "../constants"

const FrequentlyBought = () => {
    return (
        <div className="text-[16px]  ">
            <div className="max-w-custom w-full mx-auto py-10 px-12 ">
                {/* inner container */}
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    {/* title and text */}
                    <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className="text-[40px]">Frequently Bought Together</h1>
                        <p>
                            In the dynamic world of e-commerce, the "Frequently Bought Together" feature has become a cornerstone of the online shopping experience. This tool leverages the power of data analytics and consumer behavior insights to suggest complementary products that are often purchased in conjunction with the item a customer is viewing. By highlighting these related products, retailers aim to increase sales, improve customer satisfaction, and streamline the shopping process.
                        </p>
                    </div>
                    {/* cards */}
                    <div className="flex justify-between items-center w-full ">
                        {
                            FrequentlyBoughtProducts.map(item=>{
                                return(
                                    <ProductCard product={item}/>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FrequentlyBought