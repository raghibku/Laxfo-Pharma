

const Navbar = () => {
  return (
    <div className="bg-nav-bg ">
        <div className="max-w-custom w-full mx-auto py-4 px-12">
          {/* inner container */}
          <div className="flex justify-between items-center w-full text-[16px]">
            {/* logo */}
            <div>
              <img src="/src/assets/logo/logo.png" className="h-[41px] w-[93px]" alt="" />
            </div>
            {/* routes */}
            <div>
              <ul className="flex justify-center items-center gap-10">
                <li>Shop</li>
                <li>Prescription</li>
                <li>Book a Therapy</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* end */}
            <div className="flex justify-center items-center gap-4">
              <img src="/src/assets/icons/search.png" className="h-[24px] w-[24px] p-1" alt="" />
              <img src="/src/assets/icons/cart.png" className="h-[24px] w-[24px]" alt="" />
              <button className="bg-transparent border-none w-min text-nowrap">
                Sign In
              </button>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Navbar