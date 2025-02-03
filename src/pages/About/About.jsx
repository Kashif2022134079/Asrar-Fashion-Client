import Navbar from "../../Shared/Navbar/Navbar";
import asrarp from "../../assets/Asrar Fashion.jpeg"
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="bg-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={asrarp}
              alt="About Us"
              className="rounded-2xl shadow-lg w-full md:h-[400px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Asrar Fashion
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Asrar Fashion, we believe in timeless elegance and modern style. Our designs are crafted with passion to bring you the best in fashion. From casual to luxury wear, we ensure top-quality materials and trendy styles.

              We are dedicated to blending tradition with innovation, creating pieces that celebrate individuality and sophistication. Each collection is thoughtfully designed to empower confidence and express personality, making every outfit a statement.

              With a keen eye for detail and a commitment to sustainability, we source premium fabrics and prioritize ethical production. Whether youre looking for everyday comfort or a show-stopping ensemble, Asrar Fashion is here to redefine your wardrobe with elegance, quality, and a touch of luxury.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;