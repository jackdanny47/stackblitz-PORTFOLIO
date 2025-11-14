import './globals.css';
import { useThemeStore } from '@/store/themeStore';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <html lang="en">
      <body
        className={`${
          darkMode ? 'bg-black text-white' : 'bg-white text-black'
        } transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
