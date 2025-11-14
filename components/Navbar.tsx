import { useThemeStore } from '../store/themeStore';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-wide">KappaX RWA</Link>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>☰</button>
        <div className={`md:flex gap-8 text-white font-medium ${open ? "block" : "hidden"}`}>
          <Link href="#portfolio" className="hover:text-purple-400">Portfolio</Link>
          <Link href="#insights" className="hover:text-purple-400">RWA Insights</Link>
          <Link href="#contact" className="hover:text-purple-400">Contact</Link>
          <button onClick={toggleDarkMode} className="ml-4 px-3 py-1 border rounded-lg">{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
    </nav>
  );
}
