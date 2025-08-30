import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }} // slower, smooth slide
    >
      {children}
    </motion.div>
  );
}
