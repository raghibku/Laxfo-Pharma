import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-green-bg text-white text-[16px]">
      <div className="max-w-custom w-full mx-auto py-[36px] px-12 ">

        {/* inner Container */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* logo */}
          <div >
            <img src="/src/assets/logo/logo-white.png" className="h-[83px] w-[186px]" alt="" />
          </div>
          {/* newsletter */}
          <div className="lg:w-[462px] flex flex-col justify-center items-center gap-[27px] ">
            {/* text */}
            <p className="text-center w-full">
              Subscribe to the newsletter and always stay updated on the <br />
              latest news and exclusive promotions.
            </p>
            {/* email submit*/}
            <div className="w-full flex justify-between items-center px-4  border-b-2 border-white py-2">
              <input className='bg-transparent text-white' type="text" placeholder="Your Email Address"/>
              <button className="text-nowrap flex justify-center items-center">Submit <MdArrowOutward/> </button>
            </div>

          </div>
          {/* social */}
          <div className="flex flex-col justify-start items-start gap-2">
            <p>
              We are here to help
            </p>
            <div className="gap-5 flex justify-center items-center">
              <img src="/src/assets/icons/social_one.png" className="h-[36px] w-[36px]" alt="" />
              <img src="/src/assets/icons/ig.png" className="h-[36px] w-[36px]" alt="" />
              <img src="/src/assets/icons/phone.png" className="h-[36px] w-[36px]" alt="" />
              <img src="/src/assets/icons/whatsapp.png" className="h-[36px] w-[36px]" alt="" />
              <img src="/src/assets/icons/messenger.png" className="h-[36px] w-[36px]" alt="" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer