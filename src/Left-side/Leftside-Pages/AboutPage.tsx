import AnimatedWrapper from "../../components/AnimatedWrapper";

export default function AboutPage() {
  return (
    <div className="p-6 md:p-12 lg:pl-[18vw] space-y-16">
      <AnimatedWrapper from="bottom">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-blue-900">
            About Aakil Graphics
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aakil Graphics is a creative design and printing company, committed
            to turning innovative ideas into impactful visual experiences. We
            deliver top-notch solutions that cater to both digital and print
            needs, ensuring high-quality results that enhance brand identity.
          </p>
        </section>
      </AnimatedWrapper>
      <section className="space-y-12">
        <AnimatedWrapper from="bottom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-600 inline-block pb-1">
                Creative Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our team of expert designers brings creativity and precision to
                every project. Whether it's crafting logos, banners, or social
                media content, we ensure every design resonates with your
                brand's essence and message.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://akhilgraphics.in/wp-content/uploads/2021/11/hordings.jpg"
                alt="Creative Design"
                className="w-full lg:w-[30vw] shadow-lg h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper from="bottom">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-600 inline-block pb-1">
                High-Quality Printing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We specialize in delivering premium printing services using the
                latest technology to ensure sharp, vibrant, and durable prints
                for your business materials.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://akhilgraphics.in/wp-content/uploads/2021/11/flex-machine-768x432.jpg"
                alt="High-Quality Printing"
                className="shadow-lg w-[30vw] h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper from="bottom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-600 inline-block pb-1">
                Client-Centric Approach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We prioritize understanding our clients' needs and delivering
                customized solutions that exceed expectations. Our goal is to
                build long-lasting relationships based on trust and
                satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://www.shutterstock.com/image-photo/business-concept-customer-centricity-consumer-600nw-2030664920.jpg"
                alt="Client Centric Approach"
                className=" w-[30vw] shadow-lg  h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedWrapper>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-600 inline-block pb-1">
          Join Us in Your Creative Journey
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Let Aakil Graphics be your partner in creating visually stunning
          designs that leave a lasting impression. Connect with us today and
          let's bring your ideas to life!
        </p>
      </section>
    </div>
  );
}
