import { useEffect, useState } from "react";
function Hero() {
  const images = [
    "https://static.vasantvalley.org/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpeg",

    "https://static.vasantvalley.org/wp-content/uploads/2026/07/25095940/synapse_2026_4.jpeg",

    "https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg",

    "https://static.vasantvalley.org/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <img
        src={images[currentImage]}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? "bg-yellow-400 scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold tracking-wider uppercase text-sm">
            Excellence In Education
          </p>

          <h1 className="mt-6 text-white font-extrabold leading-tight text-5xl lg:text-6xl">
            Welcome to
            <span className="block mt-2 text-yellow-400">
              Vasant Valley School
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Empowering young minds with innovation, academic excellence,
            creativity and leadership. We nurture students to become confident
            global citizens.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 duration-300">
              Apply Now
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center py-6">
            <div>
              <h2 className="text-yellow-400 text-4xl font-bold">25+</h2>
              <p className="text-white mt-2">Years</p>
            </div>

            <div>
              <h2 className="text-yellow-400 text-4xl font-bold">5000+</h2>
              <p className="text-white mt-2">Students</p>
            </div>

            <div>
              <h2 className="text-yellow-400 text-4xl font-bold">300+</h2>
              <p className="text-white mt-2">Faculty</p>
            </div>

            <div>
              <h2 className="text-yellow-400 text-4xl font-bold">100%</h2>
              <p className="text-white mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
