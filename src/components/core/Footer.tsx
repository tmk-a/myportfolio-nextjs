"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      viewport={{ once: true }}
      className="text-sm p-16 opacity-70 text-center"
    >
      © 2025 Tamaki Akita. All rights reserved.
    </motion.p>
  );
};

export default Footer;
