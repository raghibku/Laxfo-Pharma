import Navbar from './Navbar'
import Footer from './Footer'
import Product from '../Product/Product'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex flex-col flex-grow ">
        <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout