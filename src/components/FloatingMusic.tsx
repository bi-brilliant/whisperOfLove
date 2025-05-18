import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay failed:", err);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        playAudio();
        setHasInteracted(true);
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("scroll", handleInteraction);
      }
    };

    // Dengarkan interaksi user
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
