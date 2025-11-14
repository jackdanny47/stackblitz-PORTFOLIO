"use client";

// components/PortfolioGrid.tsx
import { motion } from "framer-motion";
import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
