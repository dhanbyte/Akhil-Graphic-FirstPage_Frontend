import FeatureProducts from "../Right-side files/FeaturedProducts";
import UsermainPage from "../Right-side files/UsermainPage";
import AnimatedWrapper from "../components/AnimatedWrapper" 

export default function HomePage() {


  return (
    <div className="md:pl-[15vw]">
           <AnimatedWrapper from="top">
            <UsermainPage />
            <FeatureProducts />
            </AnimatedWrapper>
    </div>
  )
}
