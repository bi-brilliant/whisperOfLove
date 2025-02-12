import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LeftSideProps {
  images: string[];
}

const LeftSide: React.FC<LeftSideProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="hidden md:flex w-2/3 h-full justify-center items-center relative overflow-hidden">
        <div className="absolute w-full h-full fade-album">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Album Image ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#0000004f ",
          }}
        ></div>
      </div>
    </>
  );
};

export default LeftSide;
