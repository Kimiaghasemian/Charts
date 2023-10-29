import React from "react";
import { PieChart, Pie } from "recharts";
import Inputs from "./inputs";
export default function Donut() {
  const data = [
    { exam: "آزمون 1", percent: 20, fill: "blue" },
    { exam: "آزمون 2", percent: 70, fill: "green" },
    { exam: "آزمون 3", percent: 100, fill: "red" },
  ];

  return (
    <div>
      <PieChart width={400} height={600}>
        <Pie
          data={data}
          dataKey="percent"
          outerRadius={150}
          innerRadius={100}
          fill="green"
        />
      </PieChart>
      <Inputs />
    </div>
  );
}
