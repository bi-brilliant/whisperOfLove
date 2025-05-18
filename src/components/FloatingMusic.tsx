import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fadeInAudio = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (audio.volume < 1) {
            vol += 0.05;
            audio.volume = Math.min(vol, 1);
          } else {
            clearInterval(fadeInterval);
          }
        }, 200); // Naik 0.05 setiap 200ms → ~4 detik total fade
      })
      .catch((err) => {
        console.log("Autoplay failed:", err);
      });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 1;
      audio.play().then(() => setIsPlaying(true));
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        fadeInAudio();
        setHasInteracted(true);
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("scroll", handleInteraction);
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <>
      <audio ref={audioRef} src="/music_fallForYou.mp3" loop />

      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative w-14 h-14 rounded-full shadow-xl overflow-hidden">
          <motion.img
            src="/thumbnail_fallForYou.jpg"
            alt="Album Cover"
            className="w-full h-full object-cover"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying
                ? { repeat: Infinity, duration: 5, ease: "linear" }
                : { duration: 0 }
            }
            style={{ borderRadius: "9999px" }}
          />
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FaPause className="text-white text-sm" />
            ) : (
              <FaPlay className="text-white text-sm" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingMusicPlayer;
