"use client";

const AboutUs = () => {
  return (
    <div className="md:px-16 py-12 bg-blue-200">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">About Us</h1>
      <div className="bg-orange-500 border border-white rounded-md py-8 pl-4 h-[50vh] md:h-[30vh]">
        <p className="text-lg text-white text-left leading-relaxed pr-[10vh] xl:pr-[70vh]">
          Welcome to our Nike&apos;s shoe selling platform, where style meets performance and innovation. At Nike, we are passionate about providing you with the latest and greatest in athletic footwear. Whether you&apos;re a seasoned athlete or a casual enthusiast, our diverse range of products caters to every need and preference.
        </p>
      </div>

      <div className="bg-white border border-white rounded-md py-8 pl-4 h-[50vh] md:h-[30vh]">
        <p className="text-lg text-blue-800 text-right leading-relaxed mt-4 pr-[10vh] xl:pr-[70vh]">
          Our commitment to quality and customer satisfaction drives us to continuously improve and deliver exceptional products that elevate your sporting experience. From iconic classics to cutting-edge innovations, each pair of Nike shoes embodies our dedication to craftsmanship and technological advancement.
        </p>
      </div>

      <div className="bg-green-800 border border-white rounded-md py-8 pl-4 h-[50vh] md:h-[30vh]">
        <p className="text-lg text-white text-left leading-relaxed pr-[10vh] xl:pr-[70vh] mt-4">
          Explore our collection and discover the perfect pair of Nike shoes that not only complements your style but also enhances your performance. Join the millions around the world who trust Nike for their athletic footwear needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
