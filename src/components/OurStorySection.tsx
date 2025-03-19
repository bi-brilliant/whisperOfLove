import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const stories = [
  {
    title: "How We Met",
    content:
      "Kami berdua tumbuh di lingkungan yang sama, hanya beberapa rumah berjauhan. Namun, anehnya, kami hampir tidak pernah bertegur sapa. Mungkin karena kesibukan masing-masing atau sekadar rasa canggung yang sulit dijelaskan.\n\nSetelah lulus SMA, kami menjalani hidup di kota yang berbeda. Aku merantau untuk kuliah, begitu juga Alina. Tidak pernah terpikir bahwa takdir akan mempertemukan kami lagi di tempat yang dulu kami anggap terlalu kecil untuk menjadi bagian dari cerita hidup kami.\n\nSuatu hari, setelah bertahun-tahun jauh dari kampung halaman, aku kembali. Dan di situlah, tanpa direncanakan, kami bertemu lagi—di sebuah warung kopi sederhana yang dulu sering aku lewati tanpa benar-benar memperhatikannya.",
  },
  {
    title: "First Date",
    content:
      "Pertemuan itu membawa rasa penasaran. Kami mulai saling bertukar cerita tentang kehidupan masing-masing, mengingat masa kecil yang terasa asing, dan tanpa sadar menikmati waktu bersama.\n\nLalu, untuk pertama kalinya, aku mengajak Alina keluar. Bukan dalam suasana yang mewah—hanya duduk di taman kota sambil menikmati sore dan mengenang kisah-kisah masa lalu yang terlewat.\n\nHari itu, aku melihatnya bukan sebagai tetangga, tapi sebagai seseorang yang begitu menarik untuk dikenal lebih dalam. Dan saat itu, aku sadar, mungkin ini bukan hanya sekadar reuni biasa.",
  },
  {
    title: "Growing Together",
    content:
      "Hubungan kami berkembang dengan cara yang tidak kami duga. Dari perbincangan ringan menjadi kebiasaan, dari sekadar bertukar pesan menjadi kebutuhan.\n\nKami melewati banyak hal—perdebatan kecil, perbedaan pandangan, hingga momen-momen yang membuat kami semakin yakin bahwa kami ingin terus bersama.\n\nNamun, tidak semua perjalanan berjalan mulus. Kami mulai menghadapi realitas bahwa tidak semua orang merestui hubungan ini.",
  },
  {
    title: "Engagement",
    content:
      "Kami tahu sejak awal bahwa akan ada tantangan besar di depan. Perbedaan suku membawa stigma di mata keluarga dan masyarakat sekitar.\n\nAwalnya, restu terasa jauh dari genggaman. Ada keraguan, kekhawatiran, dan pandangan skeptis tentang bagaimana dua budaya ini bisa bersatu. Tapi kami tidak menyerah.\n\nPerlahan, kami membuktikan bahwa cinta tidak bisa diukur hanya dari latar belakang. Kami menunjukkan bahwa kami saling melengkapi, bahwa kami tidak akan menyerah hanya karena perbedaan.\n\nSetelah melewati diskusi panjang, waktu yang cukup lama, dan usaha tanpa henti, hati mereka mulai luluh. Dan akhirnya, hari itu datang—hari di mana mereka mengizinkan kami untuk melangkah ke jenjang berikutnya.\n\nLamaran kami sederhana, tapi penuh makna. Itu bukan hanya tentang dua orang yang ingin bersama, tetapi tentang dua keluarga yang akhirnya menyatu.",
  },
  {
    title: "Preparing the Wedding",
    content:
      "Mempersiapkan pernikahan bukan hanya tentang dekorasi atau undangan. Itu tentang menggabungkan dua dunia yang berbeda, menyatukan adat, dan memastikan bahwa setiap orang yang kami cintai merasa menjadi bagian dari perjalanan ini.\n\nKami belajar untuk menghargai budaya satu sama lain, untuk merancang pernikahan yang tidak hanya menjadi simbol cinta kami, tetapi juga simbol persatuan.\n\nDan di tengah semua persiapan yang melelahkan, satu hal yang selalu kami pegang teguh—kami telah melewati begitu banyak rintangan untuk sampai di titik ini, dan kami akan terus berjuang untuk masa depan yang lebih indah bersama.",
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
      style={{ backgroundImage: 'url("/bg7.jpg")' }}
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
            className="backdrop-blur-md bg-white/5 border border-white/40 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <button
              onClick={() => toggleStory(index)}
              className="w-full flex justify-between items-center px-4 py-2 text-lg font-semibold font-poppins text-white bg-white/20 hover:bg-white/40 hover:border-white border border-white/40"
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
                  className="overflow-hidden px-6 pb-4 text-slate-200 pt-4 font-poppins"
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
