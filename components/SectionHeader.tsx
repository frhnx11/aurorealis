"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type SectionHeaderVariant = 
  | "glass" 
  | "neon" 
  | "gradient" 
  | "floating" 
  | "split";

interface SectionHeaderProps {
  children: ReactNode;
  subtitle?: string;
  variant?: SectionHeaderVariant;
  className?: string;
}

export default function SectionHeader({ 
  children, 
  subtitle, 
  variant = "gradient",
  className = "" 
}: SectionHeaderProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "glass":
        return "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 shadow-2xl";
      
      case "neon":
        return "bg-black/40 border-2 border-purple-500/50 rounded-xl px-8 py-4 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300";
      
      case "gradient":
        return "bg-gradient-to-r from-purple-500/20 via-purple-600/30 to-purple-500/20 border border-purple-500/30 rounded-2xl px-8 py-4 shadow-xl backdrop-blur-sm";
      
      case "floating":
        return "bg-gray-900/80 border border-gray-700/50 rounded-2xl px-8 py-4 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300";
      
      case "split":
        return "relative bg-gradient-to-r from-purple-600/90 via-purple-500/80 to-transparent rounded-2xl px-8 py-4 shadow-xl before:absolute before:inset-0 before:bg-gradient-to-l before:from-transparent before:via-transparent before:to-purple-600/20 before:rounded-2xl";
      
      default:
        return "bg-gradient-to-r from-purple-500/20 via-purple-600/30 to-purple-500/20 border border-purple-500/30 rounded-2xl px-8 py-4 shadow-xl backdrop-blur-sm";
    }
  };

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`inline-block ${getVariantStyles()} ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent tracking-tight uppercase" style={{ fontFamily: 'Rockybilly, serif' }}>
          {children}
        </h2>
        {subtitle && (
          <motion.p 
            className="text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}