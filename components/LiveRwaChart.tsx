"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const LiveRwaChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "RWA Market Index",
        data: [20, 25, 22, 28, 30, 35, 40],
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate live data fetch
    const timer = setTimeout(() => {
      setChartData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: prev.datasets[0].data.map((val) => val + Math.random() * 5),
          },
        ],
      }));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading Chart...</p>;

  return (
    <div className="w-full max-w-2xl mx-auto py-6">
      <Line data={chartData} />
    </div>
  );
};

// Default export to avoid Next.js import errors
export default LiveRwaChart;
