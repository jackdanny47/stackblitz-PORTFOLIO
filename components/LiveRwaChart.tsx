'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LiveRwaChartProps {
  data?: number[];
  labels?: string[];
}

export default function LiveRwaChart({ data = [], labels = [] }: LiveRwaChartProps) {
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'RWA Live Data',
        data: data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  useEffect(() => {
    // Example: simulate live data update every 5s
    const interval = setInterval(() => {
      const newPoint = Math.floor(Math.random() * 100);
      setChartData((prev) => ({
        labels: [...prev.labels, new Date().toLocaleTimeString()],
        datasets: [{ ...prev.datasets[0], data: [...prev.datasets[0].data, newPoint] }],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={chartData} />;
}
