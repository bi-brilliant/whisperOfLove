import React from "react";
import LeftSide from "./LeftSide";
import { motion } from "framer-motion";

const MainContent: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between">
      {/* Bagian Kiri: Album Gambar */}
      <LeftSide images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />

      {/* Bagian Kanan: Konten Utama */}
      <div
        className="w-full md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Section Pembuka */}
        <motion.div
          className="relative h-screen flex flex-col items-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/obj2.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gradien Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center h-full justify-between">
            {/* Header */}
            <motion.div
              className="mt-16 z-10 text-center" // z-10 memastikan konten berada di atas gradien
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              {/* The Wedding Of */}
              <motion.h2
                className="text-xl tracking-wider font-playfair"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                THE WEDDING OF
              </motion.h2>

              {/* Names */}
              <motion.h1
                className="text-7xl font-bold mt-5 font-vibes"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Alin & Aldi
              </motion.h1>

              {/* Date */}
              <motion.p
                className="text-base mt-1 font-poppins"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                02 • 04 • 2025
              </motion.p>
            </motion.div>

            {/* GIF Looping */}
            <motion.img
              src="/gif_scrollDown.gif" // Ganti dengan path file GIF Anda
              alt="Animated decoration"
              className="mt-4 w-24 h-24 mb-12" // Sesuaikan ukuran sesuai kebutuhan
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
          </div>
        </motion.div>

        {/* Section Konten */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-end bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/obj3.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Konten */}
          <div className="relative z-10 text-white text-center px-10 pb-20">
            {/* Quotes */}
            <motion.p
              className="text-base mt-1 font-poppins"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              "Pasangan terbaik bukan yang sempurna, tapi yang bersama-sama
              saling melengkapi kekurangan dengan cinta dan kesabaran."
            </motion.p>
          </div>

          {/* Gradien Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Section Konten */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-end bg-center bg-cover snap-start gap-10 pb-10"
          style={{ backgroundImage: 'url("/obj1.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mt-14 z-10 text-center px-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <motion.h2
              className="text-sm tracking-wider font-poppins font-bold"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Dengan hati yang penuh rasa syukur,
            </motion.h2>
            <motion.p
              className="text-sm mt-1 font-poppins"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Kami bermaksud mengundang kehadiran Bapak/Ibu/Saudara/i untuk
              turut merayakan momen bahagia pernikahan kami:
            </motion.p>
          </motion.div>

          <div className="relative z-10 text-white text-center mb-10 px-4 flex row">
            <motion.div
              className="text-sm mt-1 font-poppins text-left"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              style={{
                borderLeft: "solid",
                borderLeftWidth: 3,
                borderLeftColor: "#ffd700",
                paddingLeft: 15,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Putra kedua dari Ibu Muaedah M.Pd
              <motion.h1
                className="text-4xl font-bold mt-5 font-vibes"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Rivaldi Fatah
              </motion.h1>
            </motion.div>
            <motion.p
              className="text-sm mt-1 font-poppins text-right"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              style={{
                borderRight: "solid",
                borderRightWidth: 3,
                borderRightColor: "#ffd700",
                paddingRight: 15,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Putri pertama dari Bapak Akbar S.Kom & Ibu Siti S.Pd <br />
              <motion.h1
                className="text-4xl font-bold mt-5 font-vibes"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Vicensia Oselina
              </motion.h1>
            </motion.p>
          </div>

          {/* Gradien Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Section Pembuka */}
        <motion.div
          className="relative flex flex-col items-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/bg4.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gradien Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center h-full justify-between px-8">
            {/* Header */}
            <motion.div
              className="mt-16 z-10 text-center px-4"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              {/* Names */}
              <motion.h1
                className="text-4xl font-bold mt-5 font-vibes"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Moment yang berharga
              </motion.h1>

              {/* Date */}
              <motion.p
                className="text-base mt-1 font-poppins"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                "Menciptakan kenangan adalah hadiah yang tak ternilai harganya.
                Kenangan akan bertahan seumur hidup; benda-benda hanya dalam
                waktu singkat."
              </motion.p>
            </motion.div>

            {/* Galeri */}
            <div className="w-full mt-8">
              {/* Foto Besar 1:1 */}
              <div className="mb-4">
                <motion.div
                  className="w-full h-80 md:h-96 lg:h-[500px] relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/obj2.jpg"
                    alt="Big Image"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Grid Foto 1:1 (6 Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                {[
                  "/obj1.jpg",
                  "/obj2.jpg",
                  "/obj3.jpg",
                  "/obj4.jpg",
                  "/bg.jpg",
                  "/bg1.jpg",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className="w-full h-48 relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={src}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Grid Foto 1:2 (2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
                {["/female1.jpg", "/male1.jpg"].map((src, index) => (
                  <motion.div
                    key={index}
                    className="w-full h-80 relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={src}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Penutup */}
        <motion.div
          className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover snap-start"
          style={{ backgroundImage: 'url("/image3.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gradien Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

          {/* Konten */}
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
