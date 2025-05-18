import React from "react";
import LeftSide from "./LeftSide";
import { motion } from "framer-motion";
import HeaderSection from "./HeaderSection";
import QuoteSection from "./QuoteSection";
import GallerySection from "./GallerySection";
import BrideSection from "./BrideSection";
import OurStory from "./OurStorySection";
import SaveTheDate from "./SaveTheDateSection";
import Mapping from "./MappingSection";
import RSVP from "./RSVPSection";
import GiftSection from "./GiftSection";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

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
          className="relative h-screen flex flex-col items-center bg-center bg-cover snap-startat"
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
          className="relative h-screen flex flex-col items-center justify-end bg-center bg-cover snap-startat pb-36"
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
        <BrideSection />

        {/* Gallery */}
        <motion.div
          className="relative flex flex-col items-center bg-center bg-cover snap-startat"
          style={{ backgroundImage: 'url("/bg4.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent pointer-events-none"></div>
          <div className="flex flex-col items-center h-full justify-between px-8 pt-16">
            <motion.h1
              className="text-6xl font-bold mt-5 font-vibes z-10 mb-5"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our Moment
            </motion.h1>
            <GallerySection />
          </div>
        </motion.div>

        {/* Our Story */}
        <OurStory />

        {/* Save The Date */}
        <SaveTheDate />

        {/* Mapping */}
        <Mapping />

        {/* RSVP */}
        <RSVP />

        {/* Wedding Gift */}
        <GiftSection />

        {/* Closer */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover snap-startat p-6"
          style={{ backgroundImage: 'url("/image3.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
          <div className="relative z-10 text-white text-center">
            <p className="mt-2 text-sm font-poppins">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
              kepada kedua mempelai.
            </p>

            <p className="mt-10 text-sm font-poppins">
              Hormat Kami Yang Mengundang
            </p>
            <h2 className="text-6xl font-bold font-vibes mt-2">Aldi & Alin</h2>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-6 pt-10 snap-startat">
          <p className="text-sm font-poppins">Digital Invitation by NABIL</p>
          {/* Sosial Media Icons */}
          <div className="flex justify-center gap-2 mt-3">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-1 rounded-lg"
            >
              <FaWhatsapp size={18} className="text-white" />
            </a>
            <a
              href="https://instagram.com/nabil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-1 rounded-lg"
            >
              <FaInstagram size={18} className="text-white" />
            </a>
            <a
              href="https://tiktok.com/@nabil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-1 rounded-lg"
            >
              <FaTiktok size={18} className="text-white" />
            </a>
          </div>
          {/* Logo NABIL */}
          <img
            src="/logo-dark.png"
            alt="NABIL Logo"
            className="w-24 mx-auto mt-4"
          />
        </footer>
      </div>
    </div>
  );
};

export default MainContent;
