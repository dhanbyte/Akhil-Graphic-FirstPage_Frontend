import AnimatedWrapper from "../../components/AnimatedWrapper"

export default function ContactPage() {
  return (
    <div className="p-8 md:p-16 space-y-16 lg:pl-[20vw] bg-gray-100">
          <AnimatedWrapper from="bottom">     <div className="bg-blue-900 text-white text-center py-16 rounded-lg shadow-xl">
        <h1 className="text-6xl font-extrabold">Contact Aakil Graphics</h1>
    
        <p className="mt-6 text-2xl">We'd love to hear from you! Reach out for any inquiries or services.</p>
 
      </div>
        </AnimatedWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedWrapper from="bottom">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-900">Get in Touch</h2>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full border px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full border px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <textarea 
              placeholder="Your Message" 
           
              className="w-full border px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white text-xl px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        </AnimatedWrapper>
          <AnimatedWrapper from="bottom">
        <div className="space-y-8">

          <h2 className="text-4xl font-bold text-blue-900">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Address:</strong> 123 Aakil Street, Design City, Country</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Email:</strong> contact@aakilgraphics.com</p>
            <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM to 6:00 PM</p>
          </div>

          <div className="mt-6">
            <iframe
              title="Aakil Graphics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531887!3d-37.81627937975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6a4df%3A0x5045675218ce840!2sAakil%20Graphics!5e0!3m2!1sen!2sau!4v1614654906980!5m2!1sen!2sau"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
             
              loading="lazy"
            ></iframe>
          </div>
        </div>
        </AnimatedWrapper>

      </div>
    </div>
  );
}
