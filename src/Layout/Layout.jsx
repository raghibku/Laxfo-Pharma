import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Home/Home'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex flex-col flex-grow ">
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout