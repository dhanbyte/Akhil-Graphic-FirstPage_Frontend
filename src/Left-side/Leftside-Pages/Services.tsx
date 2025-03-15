import AnimatedWrapper from "../../components/AnimatedWrapper";

const services = [
  {
    id: 1,
    title: "Graphics Designing",
    description:
      "We create all types design like Logo, Visiting Card, Flex Banner, Brochure, Box Design, Letter Head, Flyers, Envelopes, Bill Book, Invitation card, Sticker, One way vision, Backlite, Certificate, Menu cards, Product tag, etc. Simply put, we provide you with top-quality design at affordable prices with satisfaction.",
    image: "https://akhilgraphics.in/wp-content/uploads/elementor/thumbs/Graphic_Designer-pfwzfm9yfp8rocpm21xgmavitobup1c35qmitw5o4w.jpg",
  },
  {
    id: 2,
    title: "Printing Work",
    description:
      "We provide best quality printing of Single and Multi Color designs like Visiting Card, Flex Banner, Brochures, Box Design, Letter Head, Flyers, Envelopes, Bill Book, Invitation card, Sticker, One way vision, Backlite, Certificate, Menu cards, etc. Simply put, we provide you with top-quality printing materials at affordable prices with satisfaction.",
    image: "https://akhilgraphics.in/wp-content/uploads/elementor/thumbs/printing-work-pfwzjfie5igmrf69sp8zqc8tjxjfwugwclvewai6wg.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "On various social media platforms like Facebook, Instagram we do advertising by making creative ads. Content marketing is the creation and distribution of digital marketing collateral with the goal of increasing brand awareness, improving search engine rankings, and generating audience interest.",
    image: "https://akhilgraphics.in/wp-content/uploads/elementor/thumbs/printing-work-pfwzjfie5igmrf69sp8zqc8tjxjfwugwclvewai6wg.jpg",
  },
];

const moreServices = [
  "Visiting Card", "Flex Banner", "Letterhead", "Logo Designs", "Envelopes", "Packaging design", "One Way Vision", "Certificate", "I-Card", "Medal Printing", "Billbook", "Flyers", "Wedding Card", "Invitation Card", "Sticker", "Calendar", "Backlite", "Book & Supplementary", "Advertise & Festival Post", "Trophy Printing", "Box Design & Printing", "T-Shirt Printing", "Bag Printing", "Brochure", "Vinyl Sticker", "Files", "Menu Cards", "Mobile Cover", "Social Media Pages Handling", "Website Designing"
];

export default function ServicesPage() {
  return (
    <div className="p-4 lg:pl-[22vw] md:p-6 space-y-12">

      <h1 className="text-4xl font-bold text-center">
        These Are Our <span className="text-yellow-500">Services</span>
      </h1>

      {services.map((service) => (
        <div key={service.id} className="grid py-[6vh] md:grid-cols-2 gap-6 items-center">
          <AnimatedWrapper from="left">
          <div>
            <h2 className="text-5xl text-blue-950 py-[6vh] font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
         
          </div>
          </AnimatedWrapper>
        
          <AnimatedWrapper from="right">

          <img 
            src={service.image} 
            alt={service.title} 
            className="rounded-lg  shadow-md  h-[40vh] w-[30vw]" 
          />
                </AnimatedWrapper>

        </div>
      ))}
      <AnimatedWrapper from="bottom">

      <div>
        <h2 className="text-3xl font-bold text-center mb-4">World-Class Design At Your Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {moreServices.map((item, index) => (
            <p key={index} className="text-gray-600 hover:text-orange-600 ">- {item}</p>
          ))}
        </div>
      </div>
          </AnimatedWrapper>
    </div>
  );
}
