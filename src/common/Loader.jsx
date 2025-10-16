import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-[3px] border-orange-500 border-t-transparent rounded-full shadow-md"
      />
    </div>
  );
}
