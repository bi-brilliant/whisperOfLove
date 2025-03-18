import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const stories = [
  {
    title: "How We Met",
    content:
      "Kami berdua tumbuh di lingkungan yang sama, hanya beberapa rumah berjauhan. Namun, anehnya, kami hampir tidak pernah bertegur sapa. Mungkin karena kesibukan masing-masing atau sekadar rasa canggung yang sulit dijelaskan...\n\nSuatu hari, setelah bertahun-tahun jauh dari kampung halaman, aku kembali. Dan di situlah, tanpa direncanakan, kami bertemu lagi di sebuah warung kopi sederhana yang dulu sering aku lewati tanpa benar-benar memperhatikannya.",
  },
  {
    title: "First Date",
    content:
      "Pertemuan itu membawa rasa penasaran. Kami mulai saling bertukar cerita tentang kehidupan masing-masing, mengingat masa kecil yang terasa asing, dan tanpa sadar menikmati waktu bersama...",
  },
  {
    title: "Growing Together",
    content:
      "Hubungan kami berkembang dengan cara yang tidak kami duga. Dari perbincangan ringan menjadi kebiasaan, dari sekadar bertukar pesan menjadi kebutuhan...",
  },
  {
    title: "Engagement",
    content:
      "Kami tahu sejak awal bahwa akan ada tantangan besar di depan. Perbedaan suku membawa stigma di mata keluarga dan masyarakat sekitar...",
  },
  {
    title: "Preparing the Wedding",
    content:
      "Mempersiapkan pernikahan bukan hanya tentang dekorasi atau undangan. Itu tentang menggabungkan dua dunia yang berbeda...",
  },
];

const OurStory: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="relative flex flex-col snap-start items-center justify-start min-h-screen bg-cover bg-center px-4 md:px-8 pb-32 pt-24"
      style={{ backgroundImage: 'url("/bg2.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
        Our Story
      </motion.h1>
      <div className="w-full max-w-2xl space-y-4 mt-80">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md bg-black/30 border border-white/40 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <button
              onClick={() => toggleStory(index)}
              className="w-full flex justify-between items-center px-4 py-2 text-lg font-semibold text-white bg-black/20 border border-white/40"
            >
              {story.title}
              {openIndex === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden px-6 pb-4 text-slate-200 pt-4"
                >
                  {story.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurStory;
