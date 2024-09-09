import Navbar from './Navbar'
import Footer from './Footer'
import Product from '../Product/Product'
import NewSite from './NewSite'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NewSite/>
      <Navbar/>
      <div className="flex flex-col flex-grow ">
        <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout