import { motion } from 'framer-motion';

export default function PortfolioGrid() {
  const items = [
    { title: "Tokenized Land Registry", desc: "AI-enabled RWA ownership platform.", tag: "RWA Platform" },
    { title: "Supply-Chain Oracle UI", desc: "On-chain verification dashboard.", tag: "Oracle" },
    { title: "Carbon Credit Tokenizer", desc: "Asset tokenization website.", tag: "Tokenization" },
    { title: "RWA AI Data Portal", desc: "Predictive analytics platform.", tag: "Analytics" },
  ];

  return (
    <section className="py-20" id="portfolio">
      <h2 className="text-center text-4xl font-bold text-white mb-12">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity:0,y:50 }} whileInView={{ opacity:1,y:0 }} viewport={{once:true,amount:0.3}} transition={{duration:0.6,delay:i*0.1}} className="bg-gradient-to-br from-purple-900/40 to-black border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all shadow-xl">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300 mt-3">{item.desc}</p>
            <span className="text-purple-400 text-sm mt-4 inline-block font-semibold">{item.tag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
