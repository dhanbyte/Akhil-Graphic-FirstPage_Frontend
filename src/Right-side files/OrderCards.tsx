import AnimatedWrapper from "../components/AnimatedWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faStreetView, faSwatchbook } from "@fortawesome/free-solid-svg-icons";

export default function OrderCards() {
  return (
    <div>
      {/* Order Online with Akhil Graphics title  */}
      <div>
        <AnimatedWrapper from="bottom">
          <div className="flex justify-center">
            <div className="text-center">
              <span className="text-orange-500 italic text-2xl font-medium">
                This Is Why
              </span>
              <br />
              <div className="flex justify-center items-center gap-2">
                <span className="text-[#1a1a5e] text-3xl md:text-4xl font-bold">
                  You Should Choose
                </span>
                <img
                  src="https://akhilgraphics.in/wp-content/uploads/2021/11/cropped-logo-1-1-300x300.png"
                  alt="Logo"
                  className="h-16 w-16 md:h-20 md:w-20"
                />
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Order Cards Abouts  */}
      <AnimatedWrapper from="bottom">
        <div className="grid grid-cols-1 lg:pl-[4vw] md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {/* Card Template */}
          {[
            {
              icon: faStreetView,
              title: "Quality Services",
              description: "We have Expert designers in designing field and they are working with best efforts."
            },
            {
              icon: faSwatchbook,
              title: "Expert Designers",
              description: "Our expert designers work with dedication to bring your vision to life."
            },
            {
              icon: faIdCard,
              title: "Affordable Pricing",
              description: "Get the perfect printing solution, whatever your budget."
            },
            {
              icon: faIdCard,
              title: "Trusted & Secure",
              description: "Your data, our priority—trusted, secure, and protected every step of the way."
            }
          ].map((card, index) => (
            <div
              key={index}
              className="p-4 bg-white flex flex-col items-center pl justify-center gap-4 rounded-xl shadow-2xl h-[30vh] md:h-[35vh] w-full md:w-[40vw] lg:w-[18vw] hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={card.icon} size="4x" color="orange" />
              <h3 className="text-center text-lg font-semibold">{card.title}</h3>
              <p className="text-center text-gray-600 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </div>
  );
}
