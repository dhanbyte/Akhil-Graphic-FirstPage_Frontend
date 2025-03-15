import { useState } from "react";
import AnimatedWrapper from "../../components/AnimatedWrapper";

const faqs = [
  {
    question: "What services does Aakil Graphics offer?",
    answer:
      "Aakil Graphics offers a variety of design services including logo creation, business cards, flyers, brochures, banners, social media posts, and more. We also provide printing services for high-quality outputs."
  },
  {
    question: "How can I contact Aakil Graphics?",
    answer:
      "You can contact us through our Contact page, via email at contact@aakilgraphics.com, or call us at +91-1234567890."
  },
  {
    question: "Do you offer custom design services?",
    answer:
      "Yes, we offer custom design services tailored to your specific requirements. Get in touch with us to discuss your project in detail."
  },
  {
    question: "What is the turnaround time for design projects?",
    answer:
      "Turnaround times vary depending on the complexity of the project. However, we strive to deliver most design projects within 3-5 business days."
  },
  {
    question: "Can I request revisions on my design?",
    answer:
      "Yes, we offer revision options to ensure you are fully satisfied with the final design. The number of revisions will depend on the project agreement."
  },
  {
    question: "Do you provide digital and printed copies?",
    answer:
      "Absolutely! We can provide both digital files for online use and printed copies as per your requirements."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 lg:pl-[18vw] md:p-12 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <AnimatedWrapper from="bottom">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-xl font-semibold text-blue-800">{faq.question}</h2>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </AnimatedWrapper>
      </div>
    </div>
  );
}
