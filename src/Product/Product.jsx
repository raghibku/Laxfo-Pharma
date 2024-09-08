
import Advertise from './Advertise'
import Consultation from './Consultation'
import DescriptiveAccordion from './DescriptiveAccordion'
import FrequentlyBought from './FrequentlyBought'
import HeroSection from './HeroSection'
import Review from './Review'

const Product = () => {
  return (
    <div>
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