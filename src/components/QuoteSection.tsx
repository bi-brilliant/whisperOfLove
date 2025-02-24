import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
  return (
    <motion.p
      className="text-base mt-1 font-poppins"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      "Pasangan terbaik bukan yang sempurna, tapi yang bersama-sama saling
      melengkapi kekurangan dengan cinta dan kesabaran."
    </motion.p>
  );
};

export default QuoteSection;
