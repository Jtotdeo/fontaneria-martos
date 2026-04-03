"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white",
  secondary: "bg-accent-400 hover:bg-accent-500 text-gray-900",
  outline: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-xl transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
