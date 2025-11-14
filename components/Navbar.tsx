// components/Navbar.tsx
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-white text-2xl font-bold">RWA Portfolio</div>
        <motion.ul
          className="flex space-x-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-purple-500 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
