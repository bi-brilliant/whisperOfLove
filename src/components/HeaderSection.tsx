import { motion } from "framer-motion";

interface HeaderSectionProps {
  bridegroom: string;
  bride: string;
  date: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  bridegroom,
  bride,
  date,
}) => {
  return (
    <motion.div
      className="mt-16 z-10 text-center"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
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
        {/* Cowo & Cewe */}
        {bridegroom} <br /> &<br /> {bride}
      </motion.h1>

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
        {date}
      </motion.p>
    </motion.div>
  );
};

export default HeaderSection;
