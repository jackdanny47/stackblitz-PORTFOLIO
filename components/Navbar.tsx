"use client";

import { useThemeStore } from '../store/themeStore';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav> ... </nav>
  );
}
