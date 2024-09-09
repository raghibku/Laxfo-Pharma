
const Advertise = () => {
    return (
        <div className='w-full bg-[#ff6b6e] text-white'>
            <div className="max-w-[1360px] mx-auto w-full flex justify-between items-center py-4">
                <div className="grid grid-cols-1 grid-rows-3  md:grid-cols-3 md:grid-rows-1 gap-4  w-full text-center">
                    <div className="w-full">
                        <h1 className="text-[24px]">Free BD shopping Over BDT1500</h1>
                        <button className="bg-transparent border-none">Shop Now</button>
                    </div>
                    <div className="w-full">
                        <h1 className="text-[24px]">3-5 Day International Shipping</h1>
                        <button className="bg-transparent border-none">Learn More</button>
                    </div>
                    <div className="w-full">
                        <h1 className="text-[24px]">Rated 4.8 out of 5 on Trustpilot</h1>
                        <button className="bg-transparent border-none">Read our reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertise