import React from "react";
import LeftSide from "./LeftSide";
import { motion } from "framer-motion";

interface CoverProps {
  onOpenInvitation: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpenInvitation }) => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between">
      {/* Bagian Kiri: Album Gambar */}
      <LeftSide images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />

      {/* Bagian Kanan: Konten Utama */}
      <motion.div
        className="w-full md:w-1/3 h-full flex flex-col justify-center items-center text-center text-white px-4 bg-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* The Wedding Of */}
        <motion.h2
          className="text-xl tracking-wider font-playfair"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          THE WEDDING OF
        </motion.h2>

        {/* Names */}
        <motion.h1
          className="text-7xl font-bold mt-6 font-vibes"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Aldi & Alin
        </motion.h1>

        {/* Date */}
        <motion.p
          className="text-base mt-2 font-poppins"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          02 • 04 • 2025
        </motion.p>

        {/* Image */}
        <motion.div
          className="mt-14 mb-10 h-[280px] w-[200px] bg-white rounded-t-full overflow-hidden p-[3px]"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          <img
            src="/obj1.jpg"
            alt="Album Image 2"
            className="w-full h-full object-cover rounded-t-full"
          />
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={onOpenInvitation}
          className="mt-8 px-6 py-3 font-poppins bg-white bg-opacity-20 hover:bg-opacity-50 hover:border-white rounded-full border border-white"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Cover;
