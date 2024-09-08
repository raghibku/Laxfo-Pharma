

const Consultation = () => {
  return (
    <div className='w-full bg-[#f2e7ce]'>
            <div className="max-w-[1360px] mx-auto w-full flex justify-between items-center  ">
                {/* image */}
                <img src="/src/assets/images/consultation.png" className='max-w-[420px] ' alt="" />
                {/* <div className='w-[50%] h-full'>
                    
                </div> */}
                {/* message */}
                <div className='w-full flex justify-center items-center'>
                    <div className=' '>
                        <p className=''>Not Sure where to start?</p>
                        <h1 className="text-[40px]">Book a Free 25 Minute <br />Consultation</h1>
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