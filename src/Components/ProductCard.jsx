
const ProductCard = (props) => {
    const {product} = props
    const {title,price,desc,image,quantity} = product
    console.log(title,price,desc,image,quantity)
    return (

        <div className="max-w-[300px] flex flex-col justify-between items-center gap-2">
            {/* card image */}
            <img src={image} alt="" />
            {/* title and price */}
            <div className="flex justify-between items-center w-full">
                {/* title */}
                <h3 className="text-[20px]">
                    {title}
                </h3>
                <h3 className="text-[20px] italic font-bold">
                    BDT {price}
                </h3>

            </div>
            {/* desc */}
            <p className="text-[12px]">
                {desc}
            </p>
            <p className="w-full text-start text-[12px] italic">
                {quantity}
            </p>

        </div>
    )
}

export default ProductCard