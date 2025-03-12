import { useEffect, useState } from "react";

const productGroups = [
  [
    {
      name: "Stopper-Compl Bobbin Rod",
      brand: "Toyota",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Book.jpg",
    },
    {
      name: "IRO2231 Weft Storage",
      brand: "Staubli",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Mug.jpg",
    },
    {
      name: "Staubli Jacquard Hook 1",
      brand: "Staubli",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/T-Shirt.jpg",
    },
    {
      name: "Encoder Part",
      brand: "Tsudakoma",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/3.jpg",
    },
  ],
  [
    {
      name: "Weaving Beam",
      brand: "Picanol",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/2.jpg",
    },
    {
      name: "Yarn Cutter",
      brand: "Toyota",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Logo-Design.jpg",
    },
    {
      name: "Tension Spring",
      brand: "Staubli",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Sticker.jpg",
    },
    {
      name: "Loom Sensor",
      brand: "Tsudakoma",
      link: "#",
      image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Packaging-Box.jpg",
    },
  ],
];

export default function PremiumTextileParts() {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % productGroups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" p-8 bg-gradient-to-r  gap-5 ">
      <div className=" md:grid  md:grid-cols-1 lg:grid-cols-2  gap-8">
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {productGroups[currentGroup].map((product, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-lg cursor-pointer hover:scale-105 transition-transform min-h-[250px] flex flex-col justify-end bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${product.image})`,
              }}
              onClick={() => window.open(product.link, "_blank")}
            >
              <div className="text-white bg-opacity-75 w-full p-4 rounded-b-xl">
                <span className="text-lg text-gray-200">{product.brand}</span>
                <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Business Info */}
        <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-2xl">
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-600 text-xs   rounded-full mr-2">
              GST Verified
            </span>
            <span className="inline-block bg-green-100 text-green-600 text-xs   rounded-full">
              TrustSEAL Verified
            </span>
          </div>
          <h2 className="text-3xl  font-bold text-gray-800">
          Crafting Creative {" "}
            <span className="text-orange-500">Visuals with Impact</span>
          </h2>
          <p className="text-gray-600 mt-2">For Your Business</p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8">
            <div className="p-4 bg-gray-100 rounded-xl text-2xl shadow">
              <p className="text-sm text-gray-500">Nature of Business</p>
              <p className="font-semibold text-gray-700">Graphics Designing</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl text-2xl shadow">
              <p className="text-sm text-gray-500">Legal Status of Firm</p>
              <p className="font-semibold text-gray-700">Proprietorship</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl shadow text-2xl col-span-2">
              <p className="text-sm text-gray-500">GST No.</p>
              <p className="font-semibold text-gray-700">08BIEPS4050F1ZB</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="w-full   py-2 rounded-xl border border-gray-300 text-gray-500 shadow hover:bg-orange-400 hover:text-white transition">
              Get Best Quote
            </button>
            <button className="w-full h-[8vh] border border-gray-300 text-gray-500  py-2 rounded-xl shadow hover:bg-blue-400 hover:text-white transition">
              View Catalogue
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8">
            <div className="p-4 bg-gray-100 rounded-xl text-xl shadow">
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="font-semibold text-gray-700">+91 9157499884</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl text-xl shadow">
              <p className="text-sm text-gray-500">Email Us</p>
              <p className=" text-gray-700">support@akhilgraphics.in</p>
            </div>
            
          </div>
        </div>
      </div>
   
    </div>
  );
}
