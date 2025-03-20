import React from "react";
import { motion } from "framer-motion";
import { ClipboardCopy } from "lucide-react";

const GiftSection: React.FC = () => {
  const accounts = [
    {
      number: "399123321",
      name: "Aldi Halimawan",
      bankLogo: "/icon_bca.png",
    },
    {
      number: "399321123",
      name: "Alina Syakira",
      bankLogo: "/icon_mandiri.png",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Nomor rekening ${text} telah disalin!`);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center bg-center bg-cover snap-start gap-10 pb-32 pt-24"
      style={{ backgroundImage: 'url("/bg5.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl font-bold mt-5 font-vibes z-10 mb-5 text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Wedding Gift
      </motion.h1>
      <p className="text-md text-center text-black px-8 mb-10 font-poppins">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara
        cashless.
      </p>

      {/* Card Bank Section */}
      <div className="flex flex-col gap-6">
        {accounts.map((acc, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[220px] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-5"
            style={{
              backgroundImage: 'url("/bgCard.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Chip */}
            <img
              src="/chip.png"
              alt="Chip"
              className="absolute top-14 left-4 w-9"
            />
            {/* Logo Bank (dari data) */}
            <img
              src={acc.bankLogo}
              alt="Bank Logo"
              className="absolute top-2 right-4 w-24"
            />

            {/* Nomor Rekening */}
            <p className="text-xl tracking-wider text-black text-left mt-20 font-poppins">
              {acc.number}
            </p>

            {/* Nama Pemilik */}
            <p className="text-md text-left text-black/80 font-poppins">
              {acc.name}
            </p>

            {/* Tombol Salin */}
            <button
              className="flex items-center justify-center max-w-44 gap-1 py-1.5 mt-4 bg-black/50 text-white text-xs font-poppins rounded-lg hover:bg-black/70 transition"
              onClick={() => copyToClipboard(acc.number)}
            >
              <ClipboardCopy size={14} style={{ marginTop: -2 }} />
              Salin No. Rekening
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GiftSection;
