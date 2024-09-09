
import Advertise from './Advertise'
import Consultation from './Consultation'
import DescriptiveAccordion from './DescriptiveAccordion'
import FrequentlyBought from './FrequentlyBought'
import HeroSection from './HeroSection'
import Review from './Review'
import SelectedProduct from './SelectedProduct'

const Product = () => {
  return (
    <div>
        <SelectedProduct/>
        <DescriptiveAccordion/>
        <HeroSection/>
        <FrequentlyBought/>
        <Review/>
        <Consultation/>
        <Advertise/>
    </div>
  )
}

export default Product