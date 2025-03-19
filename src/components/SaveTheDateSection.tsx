import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

const targetDate = new Date("2025-04-20T18:00:00").getTime(); // Ubah tanggal acara

const SaveTheDate: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(bgInterval);
  }, []);

  const addToCalendar = () => {
    const eventTitle = "Our Wedding";
    const eventStartDate = "20250420T180000Z";
    const eventEndDate = "20250420T220000Z";
    const location = "Jakarta, Indonesia";

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${eventStartDate}/${eventEndDate}&location=${encodeURIComponent(
      location
    )}&details=Join us for our special day!`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="relative h-screen flex items-end pb-32 justify-center bg-center bg-cover overflow-hidden snap-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      <motion.div
        className="relative z-10 px-8 py-8 text-center bg-white/10 backdrop-blur-lg rounded-lg border border-white/30 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className=" text-white mb-3 mt-2 text-xl tracking-wider font-playfair">
          The Wedding Of
        </h2>
        <h1 className="text-6xl font-bold mb-7 font-vibes">
          Aldi&nbsp;&nbsp;&&nbsp;&nbsp;Alin
        </h1>
        <p className="text-lg text-white mb-2 font-poppins">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
        <button
          onClick={addToCalendar}
          className="text-white text-sm underline cursor-pointer font-poppins border-slate-400 bg-black/70 hover:border-white"
        >
          Save to Calendar &gt;
        </button>
      </motion.div>
    </div>
  );
};

export default SaveTheDate;
