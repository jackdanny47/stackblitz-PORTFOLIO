import Navbar from '../components/Navbar';
import AnimatedHero from '../components/AnimatedHero';
import PortfolioGrid from '../components/PortfolioGrid';
import LiveRwaChart from '../components/LiveRwaChart';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <AnimatedHero />
      <PortfolioGrid />
      <LiveRwaChart />
      <Contact />
      <Footer />
    </main>
  );
}
