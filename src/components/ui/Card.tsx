"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
