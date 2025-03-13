import AnimatedWrapper from "../components/AnimatedWrapper";

export default function WhatWeOffer() {
  const products = [
    { name: "Visiting Card", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Letterhead", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Envelope", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Sticker", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "A4 Size 130/170/250", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Art Card 250/300", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Paper Bag", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Doctor File", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Calendar", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Book / Catalogue", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Box / Packaging", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
    { name: "Mix Printing Job", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg" },
  ];

  return (
    <div className="py-8 md:py-6 w-full">
      {/* Heading */}
      <div>
        <AnimatedWrapper from="bottom">
          <div className="flex justify-center">
            <div className="text-center">
              <span className="text-orange-500 italic text-lg md:text-xl lg:text-2xl font-medium">
                What we offer
              </span>
              <br />
              <span className="text-[#1a1a5e] text-2xl md:text-3xl lg:text-4xl font-bold">
                Explore More Products
              </span>
            </div>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-orange-500 hover:text-white duration-300 border border-gray-300 shadow-md rounded-xl w-full"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-full"
            />
            <p className="text-sm md:text-base lg:text-lg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
