import AnimatedWrapper from "../components/AnimatedWrapper";

export default function WhatWeOffer() {
  return (
    <div className="py-[12vh]">
         <div>
        <AnimatedWrapper from="bottom">
          <div className="flex   ">
            <div className=" items-center gap-2">
              <span className="text-orange-500 pl-[38vw] italic text-2xl font-medium">
              What we offer
              </span>
              <br />
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a5e] pl-[30vw] text-4xl font-bold">
                Explore More Products
                </span>
               
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  )
}
