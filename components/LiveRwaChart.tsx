"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

export interface LiveRwaChartProps {
  chartData: any;
  chartOptions: any;
}

export default function LiveRwaChart({ chartData, chartOptions }: LiveRwaChartProps) {
  return (
    <div className="bg-black p-4 rounded-xl border border-gray-800">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
