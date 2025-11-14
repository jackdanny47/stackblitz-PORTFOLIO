'use client';

import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function LiveRwaChart() {
  const [metrics,setMetrics] = useState({history:[]});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/metrics');
      const data = await res.json();
      setMetrics(data);
    };
    fetchData();
    const interval = setInterval(fetchData,10000);
    return ()=>clearInterval(interval);
  },[]);

  const data = {
    labels: metrics.history.map(p=>p.ts)||['t-4','t-3','t-2','t-1','t0'],
    datasets:[{
      label:'TVL (₦)',
      data: metrics.history.map(p=>p.value)||[10000,20000,18000,22000,26000],
      borderColor:'rgba(124,58,237,0.8)',
      backgroundColor:'rgba(124,58,237,0.3)',
      tension:0.3
    }]
  };

  return (
    <section className="py-20 bg-black/60">
      <h2 className="text-center text-4xl font-bold text-white mb-12">Live RWA Metrics</h2>
      <div className="max-w-5xl mx-auto p-4 bg-black/30 rounded-2xl border border-purple-500/20">
        <Line data={data} />
      </div>
    </section>
  );
}
