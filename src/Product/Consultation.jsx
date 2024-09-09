

const Consultation = () => {
  return (
    <div className='w-full bg-[#f2e7ce]'>
            <div className="max-w-[1360px] mx-auto w-full flex flex-col md:flex-row justify-between items-center  ">
                {/* image */}
                <img src="/assets/images/consultation.png" className='max-w-[420px] ' alt="" />
                {/* <div className='w-[50%] h-full'>
                    
                </div> */}
                {/* message */}
                <div className='w-full flex justify-center items-center pl-4 pb-10'>
                    <div className=' '>
                        <p className=''>Not Sure where to start?</p>
                        <h1 className="text-[32px] md:text-[40px]">Book a Free 25 Minute <br />Consultation</h1>
                        <button className="w-[250px] h-[48px] bg-accent text-white text-center">
                            Book Consultation
                        </button>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Consultation