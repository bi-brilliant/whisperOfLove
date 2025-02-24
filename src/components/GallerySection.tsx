import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "/obj1.jpg",
  "/obj2.jpg",
  "/obj3.jpg",
  "/obj4.jpg",
  "/bg.jpg",
  "/bg1.jpg",
  "/female1.jpg",
  "/male1.jpg",
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "lightbox") {
      setSelectedImage(null);
      setCurrentIndex(null);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-full h-48 relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => openImage(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            id="lightbox"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.img
              src={selectedImage}
              alt="Full Image"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              onClick={prevImage}
              className="absolute left-5 text-white p-2"
              style={{ backgroundColor: "#000000b3" }}
            >
              &#9664;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-5 text-white p-2"
              style={{ backgroundColor: "#000000b3" }}
            >
              &#9654;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySection;
