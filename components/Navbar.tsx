'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold"
      >
        RWA Dashboard
      </motion.div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-green-400">
          Home
        </Link>
        <Link href="/portfolio" className="hover:text-green-400">
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-green-400">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
