import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface RSVP {
  name: string;
  status: "Hadir" | "Tidak Hadir" | "Ragu";
  message: string;
  time: string;
}

const RSVP: React.FC = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Hadir" | "Tidak Hadir" | "Ragu">(
    "Hadir"
  );
  const [message, setMessage] = useState("");
  const [rsvpList, setRsvpList] = useState<RSVP[]>([
    {
      name: "Rina Setiawati",
      status: "Hadir",
      message: "Udah gak sabar ketemu kalian semua! Pasti seru banget 🎉",
      time: "13:45 19-03-2025",
    },
    {
      name: "Budi Prasetyo",
      status: "Tidak Hadir",
      message:
        "Mohon maaf banget, ada urusan keluarga yang gak bisa ditinggal. Semoga acaranya lancar ya! 🙏",
      time: "08:30 18-03-2025",
    },
    {
      name: "Santi Rahmawati",
      status: "Ragu",
      message:
        "Masih belum bisa pastiin, tapi aku usahain bisa datang ya. Nanti kabari lagi! 😊",
      time: "16:20 17-03-2025",
    },
    {
      name: "Andi Saputra",
      status: "Hadir",
      message:
        "Pasti datang dong! Gak sabar buat ngerayain bareng kalian. Sampai ketemu! 🎊",
      time: "10:10 16-03-2025",
    },
    {
      name: "Dewi Lestari",
      status: "Hadir",
      message:
        "Siap datang! Udah pesen hadiah spesial buat kalian. Semoga suka ya! 🎁",
      time: "18:05 15-03-2025",
    },
    {
      name: "Joko Wibowo",
      status: "Tidak Hadir",
      message:
        "Aduh, sayang banget bentrok sama jadwal kerjaan. Tapi semoga acaranya sukses dan lancar ya! 🥂",
      time: "20:30 14-03-2025",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll pelan ke bawah setiap ada data baru
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [rsvpList]);

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return;

    const now = new Date();
    const formattedTime = now
      .toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(".", ":"); // Biar pakai format jam 14:00

    const formattedDate = now.toLocaleDateString("id-ID").replace(/\//g, "-"); // Biar jadi 20-03-2025

    const newRSVP: RSVP = {
      name,
      status,
      message,
      time: `${formattedTime} ${formattedDate}`, // Format final
    };

    setRsvpList([newRSVP, ...rsvpList]);
    setName("");
    setMessage("");
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "Hadir":
        return "text-green-500";
      case "Tidak Hadir":
        return "text-red-500";
      case "Ragu":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <motion.div
      className="relative flex flex-col snap-startat items-center justify-start min-h-screen bg-cover bg-center px-4 md:px-8 pb-32 pt-24"
      style={{ backgroundImage: 'url("/bg10.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Form RSVP */}
      <motion.div
        className="relative z-10 w-full max-w-sm bg-gray-700/30 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white-800 text-center font-playfair mt-3">
          Informasi Kehadiran
        </h2>
        <p className="text-xs text-center text-white-500 font-poppins">
          Mohon konfirmasi sebelum 12 Januari 2025
        </p>

        <div className="mt-7">
          <label className="text-sm font-semibold text-white-700">Nama</label>
          <input
            type="text"
            className="w-full p-1.5 border rounded-md bg-gray-50/50 placeholder:text-gray-500 text-gray-800 font-poppins text-sm"
            placeholder="Masukkan nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Pilihan Kehadiran */}
        <div className="mt-5">
          <label className="text-sm font-semibold text-white-700 font-poppins">
            Status
          </label>
          <div className="flex flex-col">
            {["Hadir", "Tidak Hadir", "Ragu"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-1 font-poppins text-sm"
              >
                <input
                  type="radio"
                  name="status"
                  value={option}
                  checked={status === option}
                  onChange={() => setStatus(option as any)}
                  className="w-3 h-3"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ucapan */}
        <div className="mt-5">
          <label className="text-sm font-semibold text-white-700 font-poppins">
            Ucapan
          </label>
          <textarea
            className="w-full p-1.5 mt-1 border rounded-md bg-gray-50/50 placeholder:text-gray-500 text-gray-800 font-poppins text-sm"
            placeholder="Tulis ucapan..."
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Tombol Kirim */}
        <button
          className="w-full mt-7 bg-yellow-500 font-poppins hover:bg-yellow-600 hover:border-transparent text-white font-semibold py-2 rounded-md transition"
          onClick={handleSubmit}
        >
          Kirim
        </button>
      </motion.div>

      {/* List RSVP (Auto Scrollable) */}
      <div className="mt-6 h-96 overflow-y-auto relative z-10 w-full max-w-sm bg-gray-700/30 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6">
        {rsvpList.length === 0 ? (
          <p className="text-center text-white-500">Belum ada RSVP</p>
        ) : (
          rsvpList.map((rsvp, index) => (
            <motion.div
              key={index}
              className="p-3 mb-3 border rounded-md bg-gray-700/40 shadow-sm font-poppins"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-lg font-semibold  text-ellipsis overflow-clip">
                {rsvp.name}
              </p>
              <p
                className={`text-xs font-medium ${statusColor(rsvp.status)}`}
                style={{ marginTop: -3 }}
              >
                {rsvp.status}
              </p>
              <p className="text-sm text-white mt-3">{rsvp.message}</p>
              <p className="text-xs text-gray-350 mt-3 text-right">
                {rsvp.time}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default RSVP;
