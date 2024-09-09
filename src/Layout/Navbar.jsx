import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import Cart from "../Components/Cart";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [cartModal,SetCartModal] = useState(false)
  const links = [
    {
      id: 1,
      link: "Shop",
    },
    {
      id: 2,
      link: "Prescription",
    },
    {
      id: 3,
      link: "Book A Therapy",
    },
    {
      id: 4,
      link: "Blog",
    },
  ];
  return (
    <div className="bg-nav-bg ">
      <div className="max-w-custom w-full mx-auto py-4 px-4 md:px-12">
        {/* inner container */}
        <div className="flex justify-between items-center w-full text-[16px]">
          {/* logo */}
          <div>
            <img src="/src/assets/logo/logo.png" className="h-[41px] w-[93px]" alt="" />
          </div>
          {/* routes */}
          <div>
            <ul className="hidden md:flex justify-center items-center gap-10">
              {links.map(({ id, link }) => (
                <li key={id} >
                  <button className={'bg-transparent border-none'}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* end */}
          <div className="flex justify-center items-center gap-4">
            <img src="/src/assets/icons/search.png" className="h-[24px] w-[24px] p-1" alt="" />
            <div onClick={() => SetCartModal(!cartModal)} className="cursor-pointer pr-4 z-10 text-gray-500 ">
              {cartModal ? <FaTimes size={24} /> :<img src="/src/assets/icons/cart.png" className="h-[24px] w-[24px]" alt="" /> }
            </div>
            
            <button className="bg-transparent border-none w-min text-nowrap hidden md:flex">
              Sign In
            </button>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
              {nav ? <FaTimes size={24} /> : <RiMenu2Fill size={24} />}
            </div>
            {nav &&
              (<ul className="gap-4 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#f2ebe0]">
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="w-full text-center border-y border-[#DCD2BB] px-4 cursor-pointer capitalize py-3 text-[24px]"
                  >
                    <button
                      onClick={() => setNav(!nav)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li
                  className="w-full text-center border-y border-[#DCD2BB] px-4 cursor-pointer capitalize py-3 text-[24px]"
                >
                  <button
                      onClick={() => setNav(!nav)}
                    >
                      Sign In
                    </button>
                </li>
              </ul>)
            }
            {cartModal &&
              (<Cart/>)
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar