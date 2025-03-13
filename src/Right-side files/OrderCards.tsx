import AnimatedWrapper from "../components/AnimatedWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faStreetView, faSwatchbook } from "@fortawesome/free-solid-svg-icons";

export default function OrderCards() {
  return (
    <div>
      {/* Order Online with Akhil Graphics title  */}

      <div>
        <AnimatedWrapper from="bottom">
          <div className="flex   ">
            <div className=" items-center gap-2">
              <span className="text-orange-500 pl-[38vw] italic text-2xl font-medium">
              This Is Why
              </span>{" "}
              <br />
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a5e] pl-[30vw] text-4xl font-bold">
                You Should Choose
                </span>
                <img
                  src="https://akhilgraphics.in/wp-content/uploads/2021/11/cropped-logo-1-1-300x300.png"
                  alt="Logo"
                  className="h-20 w-20"
                />
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Order Cards Abouts  */}
      <AnimatedWrapper from="bottom">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 lg:pl-[4vw] justfiy-space-between hover:ease-in-out  gap-8 p-4">
        {/* first card */}
        <div  className="hover:ease-in-out">
          <div className="p-4 h-[] bg-white items-center justify-center  gap-8  h-[35vh] w-[18vw] rounded-xl shadow-2xl">
            <div className="text-center">
              <FontAwesomeIcon icon={faStreetView} size="5x" color="orange" />
            </div>
            <h3 className="text-center p-4">Quality Services</h3>
            <p className="text-center text-gray-600">We have Expert designers in designing field and they are working with best efforts.</p>
          </div>
        </div>

        {/* Second card */}
        <div>
          <div className="p-4 bg-white items-center justify-center  gap-8   rounded-xl h-[35vh] w-[18vw] shadow-2xl">
            <div className="text-center">
              <FontAwesomeIcon icon={faSwatchbook} size="5x" color="orange" />
            </div>
            <h3 className="text-center py-4">Expert Designers</h3>
          <p className="text-center text-gray-600">We have Expert designers in designing field and they are working with best efforts.</p>
           </div>
        </div>

        {/* trird card */}

        <div>
          <div className="p-4 bg-white items-center justify-center  rounded-xl h-[35vh] w-[18vw] shadow-2xl">
            <div className="text-center">
              <FontAwesomeIcon icon={faIdCard} size="5x" color="orange" />
            </div>
            <h3 className="text-center py-4">Affordable Pricing</h3>
            <p className="text-center text-gray-600"> Get the perfect printing - or any design! Whatever your business need or budget, we’ll help get it done.</p>
          </div>
        </div>

        {/* Forth card */}
        <div>
        <div className="p-4 bg-white items-center justify-center  rounded-xl h-[35vh] w-[18vw] shadow-2xl">
            <div className="text-center">
              <FontAwesomeIcon icon={faIdCard} size="5x" color="orange" />
            </div>
            <h3 className="text-center py-4">Trusted & Secure
            </h3>
            <p className="text-center text-gray-600 py-1">
            Your data, our priority—trusted, secure, and protected every step of the way.
            </p>
          </div>
        </div>

        
      </div>
      </AnimatedWrapper>
    </div>
  );
}
