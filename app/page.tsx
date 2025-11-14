import AnimatedHero from "@/components/AnimatedHero";
import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import LiveRwaChart from "@/components/LiveRwaChart";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <AnimatedHero />
        <LiveRwaChart />
        <PortfolioGrid />
      </main>
    </>
  );
}
