import React from "react";
import { motion } from "framer-motion";

interface BrideSectionProps {
  bridegroom: string;
  bridegroomParents: string;
  bridegroomInstagram: string;
  bride: string;
  brideParents: string;
  brideInstagram: string;
}

const BrideSection: React.FC<BrideSectionProps> = ({
  bridegroom,
  bridegroomParents,
  bridegroomInstagram,
  bride,
  brideParents,
  brideInstagram,
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center bg-center bg-cover snap-startat gap-10 pb-32 pt-24"
      style={{ backgroundImage: 'url("/bg5.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-md text-center text-black px-8 mb-10 font-poppins">
        Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
        Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
      </p>

      {/* Groom */}
      <div className="flex flex-col items-center text-center px-8 py-12 w-4/5 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 space-y-6">
        <div className="w-44 h-60 rounded-full overflow-hidden border-4 border-gold">
          <img
            src="/male1.jpg"
            alt="Pengantin Pria"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h2
          className="text-2xl tracking-wider font-playfair text-black mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bridegroom}
        </motion.h2>
        <p className="text-sm text-black/80 font-poppins">
          {bridegroomParents}
        </p>
        <a
          href={`https://instagram.com/${bridegroomInstagram}`}
          target="_blank"
          className="mt-5 font-light font-poppins text-xs px-3 py-1 rounded-lg bg-black/40 hover:bg-black/60 transition duration-300 text-white"
        >
          @{bridegroomInstagram}
        </a>
      </div>

      <img src="/icon_heart.png" className="h-40 object-cover" />

      {/* Bride */}
      <div className="flex flex-col items-center text-center px-8 py-12 w-4/5 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 space-y-6">
        <div className="w-44 h-60 rounded-full overflow-hidden border-4 border-gold">
          <img
            src="/female1.jpg"
            alt="Pengantin Wanita"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h2
          className="text-2xl tracking-wider font-playfair text-black mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bride}
        </motion.h2>
        <p className="text-sm text-black/80 font-poppins">{brideParents}</p>
        <a
          href={`https://instagram.com/${brideInstagram}`}
          target="_blank"
          className="mt-5 font-light font-poppins text-xs px-3 py-1 rounded-lg bg-black/40 hover:bg-black/60 transition duration-300 text-white"
        >
          @{brideInstagram}
        </a>
      </div>
    </motion.div>
  );
};

export default BrideSection;
