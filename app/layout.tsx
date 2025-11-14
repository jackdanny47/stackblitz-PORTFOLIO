import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'RWA Portfolio',
  description: 'Next.js + React 18 + Tailwind + Chart.js Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen font-sans">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
