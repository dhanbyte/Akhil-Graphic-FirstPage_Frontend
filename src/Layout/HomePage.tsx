import FeatureProducts from "../Right-side files/FeaturedProducts";
import OrderCards from "../Right-side files/OrderCards";
import UsermainPage from "../Right-side files/UsermainPage";
import WhatWeOffer from "../Right-side files/WhatWeOffer";
import AnimatedWrapper from "../components/AnimatedWrapper" 
export default function HomePage() {


  return (
    <div className="md:pl-[15vw]">
            <AnimatedWrapper from="top">
            <UsermainPage />
            <FeatureProducts  />
            </AnimatedWrapper>
            <OrderCards />
            <WhatWeOffer/>
    </div>
  )
}
