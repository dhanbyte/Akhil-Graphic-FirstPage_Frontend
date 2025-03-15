import FeatureProducts from "../Right-side files/FeaturedProducts";
import OrderCards from "../Right-side files/OrderCards";
import UsermainPage from "../Right-side files/UsermainPage";
import WhatWeOffer from "../Right-side files/WhatWeOffer";
import AnimatedWrapper from "../components/AnimatedWrapper" 
import  products from "../JsonFiles/products.json";
export default function HomePage() {


  return (
    <div className="md:pl-[15vw]">
           <AnimatedWrapper from="bottom">
            <UsermainPage />
            <FeatureProducts products={products} />
            </AnimatedWrapper>
            <OrderCards />
            <WhatWeOffer/>
    </div>
  )
}
