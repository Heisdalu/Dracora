import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const BudgetChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Budgets",
        data: [9500, 12000, 27670, 24000, 40000],
        backgroundColor: "#03C9D7",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
  };
  return (
    <div className="">
      <Line options={options} data={data} height="100%" />
    </div>
  );
};
export default BudgetChart;
