import React from "react";
import { motion } from "framer-motion";

const googleMapsUrl = "https://www.google.com/maps?q=Citra+8+Manado";

const Mapping: React.FC = () => {
  const events = [
    { title: "Akad Nikah", date: "25", location: "Jl Jl ke Citra 8 Manado" },
    { title: "Resepsi", date: "25", location: "Jl Jl ke Citra 8 Manado" },
  ];

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 md:px-10 py-16 snap-startat">
    <motion.div
      className="relative flex flex-col snap-startat items-center justify-start min-h-screen bg-cover bg-center px-4 md:px-8 pb-32 pt-24"
      style={{ backgroundImage: 'url("/bg10.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h2 className=" text-white text-center mt-2 text-xl tracking-wider font-playfair">
            {event.title}
          </h2>
          <p
            className="text-center text-8xl font-bold text-white font-playfair"
            style={{ marginTop: -15 }}
          >
            {event.date}
          </p>
          <p className="text-center text-sm text-white mt-3">
            Minggu, 25 Januari 2025
          </p>
          <p className="text-center text-sm text-white mt-10">
            {event.location}
          </p>

          {/* MAP SECTION */}
          <div className="relative mt-2 rounded-lg overflow-hidden">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-full h-24 overflow-hidden rounded-lg">
                <img
                  src="/mapPriview.jpg"
                  alt="Google Maps"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/45"></div>
                <span className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold text-center">
                  Click to view
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      ))}
      {/* </div> */}
    </motion.div>
  );
};

export default Mapping;
