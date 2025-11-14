// components/AnimatedHero.tsx
import { motion } from "framer-motion";
import React from "react";

const AnimatedHero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Motion container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-xl">
          RWA Developer & Influencer
        </h1>
        <p className="text-gray-300 max-w-2xl mt-6 text-lg md:text-xl">
          I build next-gen Real-World Asset platforms, automate workflows, and craft high-performance RWA digital identities.
        </p>
      </motion.div>

      {/* Optional: Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default AnimatedHero;
