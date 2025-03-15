import AnimatedWrapper from "../components/AnimatedWrapper";

export default function WhatWeOffer() {
  const products = [
    { name: "Visiting Card", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204119.png?updatedAt=1742015789086" },
    { name: "Letterhead", image: " " },
    { name: "Envelope", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204252.png?updatedAt=1742015792954 " },
    { name: "Sticker", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/India%20LOB/Stationery%2C%20Letterheads%20and%20Stamps/Custom%20Bill%20Books/IN_Custom-Bill-Books_Overview " },
    { name: "A4 Size 130/170/250", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204233.png?updatedAt=1742015792840 " },
    { name: "Art Card 250/300", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204111.png?updatedAt=1742015789076 " },
    { name: "Paper Bag", image: " https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204618.png?updatedAt=1742015807843" },
    { name: "Logo Design", image: " https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204014.png?updatedAt=1742015789069" },
    { name: "Menu Card", image: " https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204606.png?updatedAt=1742015806735" },
    { name: "Book / Catalogue", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204407.png?updatedAt=1742015799967 " },
    { name: "Box / Packaging", image: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204419.png?updatedAt=1742015800054 " },
    { name: "Banner", image: " https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-03-13%20204201.png?updatedAt=1742015792829" },
  ];

  return (
    <div className="py-8 md:py-6 w-full">
      {/* Heading */}
      <div>
         <AnimatedWrapper from="top">
          <div className="flex justify-center">
            <div className="text-center">
              <AnimatedWrapper from="bottom">

              <span className="text-orange-500 italic text-lg md:text-xl lg:text-2xl font-medium">
                What we offer
              </span>
              </AnimatedWrapper>
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
