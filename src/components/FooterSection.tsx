import { motion } from "framer-motion";

const FooterSection: React.FC = () => {
  return (
    <motion.div
      className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover snap-startat"
      style={{ backgroundImage: 'url("/image3.jpg")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
      <div className="relative z-10 text-white text-center">
        <h2 className="text-3xl font-bold font-playfair">See You There</h2>
        <p className="mt-2 text-lg font-poppins">
          We can't wait to celebrate with you!
        </p>
      </div>
    </motion.div>
  );
};

export default FooterSection;
