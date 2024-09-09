import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full'>
            <div className="max-w-[1360px] mx-auto w-full flex flex-col lg:flex-row justify-between items-center min-h-screen ">
                {/* image */}
                <img src="/assets/images/HeroImage.png" className='w-full lg:w-auto h-auto lg:h-screen' alt="" />
                {/* <div className='w-[50%] h-full'>
                    
                </div> */}
                {/* message */}
                <div className='w-full min-h-screen bg-[#677557] flex justify-center items-center'>
                    <div className='lg:w-[487px] '>
                        <p className='text-[32px] text-white'>As a certified organic, family-run pharmaceutical, our Laxfo goes directly from us to you <br /> —with love.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection