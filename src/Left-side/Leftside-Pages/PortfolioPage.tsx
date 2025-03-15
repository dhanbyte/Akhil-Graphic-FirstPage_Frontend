import { FaDownload } from "react-icons/fa";
import OrderCards from "../../Right-side files/OrderCards";
import WhatWeOffer from "../../Right-side files/WhatWeOffer";
import AnimatedWrapper from "../../components/AnimatedWrapper";

const portfolios = [
  {
    category: "Printing Work Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Printing-Works_Portfolio.pdf",
  },
];

const socialMediaPortfolios = [
  {
    title: "All Sectors Design Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Social-Media-Post-_Portfolio.pdf",
  },
  {
    title: "Classes Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Classes-Portfolio.pdf",
  },
  {
    title: "Fastfood Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Food-_Portfolio.pdf",
  },
  {
    title: "Furniture Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
  {
    title: "Hospital Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
  {
    title: "Irrigation Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
  {
    title: "Jewellers Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
  {
    title: "Political Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
  {
    title: "Real Estate Portfolio",
    downloadLink:
      "https://akhilgraphics.in/wp-content/uploads/2021/11/Akhil-Graphics_Furniture-_Portfolio.pdf",
  },
];

export default function PortfolioPage() {
  return (
    <div className="p-6 md:p-10 lg:pl-[18vw] space-y-12 bg-gray-50">
        <AnimatedWrapper from="bottom">
        <div className="bg-blue-900 text-white text-center py-12 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold">Our Portfolio</h1>
          <p className="mt-4 text-lg">
            There are some samples of our work, you can download it and see it
          </p>
        </div>
      </AnimatedWrapper>

      <div className="text-center space-y-6">
          <AnimatedWrapper from="bottom">
          {portfolios.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {item.category}
              </h2>
              <a
                href={item.downloadLink}
                className="inline-flex items-center bg-orange-400 text-white px-5 py-3 rounded-md hover:bg-orange-500 transition"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          ))}
        </AnimatedWrapper>
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-orange-700">
          Social Media Post Designs Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {socialMediaPortfolios.map((portfolio, index) => (
        <AnimatedWrapper from="bottom">
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition"
            >
              <p className="text-blue-900 text-lg font-semibold mb-3">
                {portfolio.title}
              </p>
              <a
                href={portfolio.downloadLink}
                className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          </AnimatedWrapper>
          ))}
        </div>

        <OrderCards />
        <WhatWeOffer />
      </div>
    </div>
  );
}
