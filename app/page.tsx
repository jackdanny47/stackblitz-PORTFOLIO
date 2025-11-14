"use client"; 
export const dynamic = "force-dynamic";

import React from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import LiveRwaChart from "../components/LiveRwaChart";

const projects = [
  {
    title: "RWA Dashboard",
    description: "Real-world asset dashboard project",
    image: "/images/rwa-dashboard.png",
    link: "/projects/rwa-dashboard",
  },
  {
    title: "Crypto Analytics",
    description: "Track and analyze crypto portfolios",
    image: "/images/crypto-analytics.png",
    link: "/projects/crypto-analytics",
  },
  {
    title: "DeFi Automation",
    description: "Automate DeFi workflows efficiently",
    image: "/images/defi-automation.png",
    link: "/projects/defi-automation",
  },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "RWA Portfolio Value",
      data: [12000, 15000, 14000, 17000, 20000],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: { color: "#fff" },
    },
    title: {
      display: true,
      text: "RWA Portfolio Growth",
      color: "#fff",
    },
  },
  scales: {
    y: { ticks: { color: "#fff" } },
    x: { ticks: { color: "#fff" } },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>

      <PortfolioGrid projects={projects} />

      <section className="mt-12">
        <LiveRwaChart chartData={chartData} chartOptions={chartOptions} />
      </section>
    </main>
  );
}
