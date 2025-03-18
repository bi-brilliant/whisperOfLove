import React from "react";
import LeftSide from "./LeftSide";
import { motion } from "framer-motion";
import HeaderSection from "./HeaderSection";
import QuoteSection from "./QuoteSection";
import GallerySection from "./GallerySection";

const MainContent: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between">
      <LeftSide images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />

      {/* Opening */}
      <div
        className="w-full md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        <motion.div
          className="relative h-screen flex flex-col items-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/obj2.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
          <div className="flex flex-col items-center h-full justify-between">
            <HeaderSection />
            <motion.img
              src="/gif_scrollDown.gif"
              alt="Animated decoration"
              className="mt-4 w-24 h-24 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
          </div>
        </motion.div>

        {/* Quotes */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-end bg-center bg-cover snap-start pb-36"
          style={{ backgroundImage: 'url("/obj3.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10 text-white text-center px-10">
            <QuoteSection />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Bride */}
        <motion.div
          className="relative flex flex-col items-center justify-center bg-center bg-cover snap-start gap-10 pb-32 pt-24"
          style={{ backgroundImage: 'url("/bg5.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-center text-black px-8 mb-10">
            Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
          </p>

          {/* Man */}
          {/* Pengantin Pria */}
          <div className="flex flex-col items-center text-center px-8 py-12 w-4/5 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 space-y-6">
            {/* Foto Pengantin */}
            <div className="w-44 h-60 rounded-full overflow-hidden border-4 border-gold">
              <img
                src="/male1.jpg"
                alt="Pengantin Pria"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Pengantin */}
            <motion.h2
              className="text-2xl tracking-wider font-playfair text-black mt-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Andree Luhung Himawan, A.Md.Kes
            </motion.h2>

            {/* Deskripsi Orang Tua */}
            <p className="text-sm text-black/80">
              Putra Pertama dari Bapak Ahmad Rimbo Setiawan dan Ibu
              Nirkumalasari
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/Luhung_himawan"
              target="_blank"
              className="mt-5 font-light text-xs px-3 py-1 rounded-lg bg-black/40 hover:bg-black/60 transition duration-300 text-white hover:text-white"
            >
              @Luhung_himawan
            </a>
          </div>

          {/* Separator */}
          <img src="/icon_heart.png" className="h-40 object-cover" />

          {/* Woman */}
          <div className="flex flex-col items-center text-center px-8 py-12 w-4/5 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 space-y-6">
            {/* Foto Pengantin */}
            <div className="w-44 h-60 rounded-full overflow-hidden border-4 border-gold">
              <img
                src="/female1.jpg"
                alt="Pengantin Pria"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Pengantin */}
            <motion.h2
              className="text-2xl tracking-wider font-playfair text-black mt-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Andree Luhung Himawan, A.Md.Kes
            </motion.h2>

            {/* Deskripsi Orang Tua */}
            <p className="text-sm text-black/80">
              Putra Pertama dari Bapak Ahmad Rimbo Setiawan dan Ibu
              Nirkumalasari
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/Luhung_himawan"
              target="_blank"
              className="mt-5 font-light text-xs px-3 py-1 rounded-lg bg-black/40 hover:bg-black/60 transition duration-300 text-white hover:text-white"
            >
              @Luhung_himawan
            </a>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="relative flex flex-col items-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/bg4.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent pointer-events-none"></div>
          <div className="flex flex-col items-center h-full justify-between px-8">
            <GallerySection />
          </div>
        </motion.div>

        {/* Closer */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/image3.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
          <div className="relative z-10 text-white text-center">
            <h2 className="text-3xl font-bold">See You There</h2>
            <p className="mt-2 text-lg">We can't wait to celebrate with you!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainContent;
