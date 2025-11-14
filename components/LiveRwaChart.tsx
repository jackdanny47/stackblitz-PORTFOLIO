'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LiveRwaChart = () => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'RWA Live Data',
        data: [] as number[],
        borderColor: 'rgb(34,197,94)',
        backgroundColor: 'rgba(34,197,94,0.2)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const value = Math.floor(Math.random() * 100);

      setChartData((prev) => ({
        labels: [...prev.labels.slice(-9), now],
        datasets: [
          {
            ...prev.datasets[0],
            data: [...prev.datasets[0].data.slice(-9), value],
          },
        ],
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow rounded-lg">
      <Line data={chartData} />
    </div>
  );
};

export default LiveRwaChart;
