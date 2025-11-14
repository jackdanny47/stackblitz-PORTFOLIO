import { motion } from 'framer-motion';

export default function AnimatedHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-xl">RWA Developer & Influencer</h1>
        <p className="text-gray-300 max-w-2xl mt-6 text-lg md:text-xl">
          I build next-gen Real-World Asset platforms, automate workflows, and craft high-performance RWA digital identities.
        </p>
      </motion.div>
      <motion.div className="absolute top-0 left-0 w-full h-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}>
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(124,58,237,0.2),_transparent)]"></div>
      </motion.div>
    </section>
  );
}
