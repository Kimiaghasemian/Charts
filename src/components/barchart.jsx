import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import '../styles/barchart.css'

export default function Barchart() {
      const data = [
        { exam: "آزمون 1", percent: 20 },
        { exam: "آزمون 2", percent: 70 },
        { exam: "آزمون 3", percent: 100 },
      ];

        const formatPercent = (tickItem) => {
          return `${tickItem}%`;
        };

  return (
    <div className='barchart'>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="exam" />
        <YAxis
          ticks={[20, 50, 70, 100]}
          domain={[0, 100]}
          tickFormatter={formatPercent}
          tickMargin={40}
        />
        <CartesianGrid stroke="white" />
        <Bar dataKey="percent" fill="green" barSize={40} />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
}
