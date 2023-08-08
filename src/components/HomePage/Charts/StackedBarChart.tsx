import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StackedBarChart = () => {
  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#686868",
        },
      },
      y: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          display: true,
        },
        ticks: {
          color: "#686868",
        },
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: [5000, 10000, 15000, 20000, 17000, 10000],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        data: [21000, 23000, 25000, 30000, 40000, 30000],
        label: "Budget",
        backgroundColor: "#404041",
      },
    ],
  };

  return (
    <div className="s4m:mx-auto w-[100%] s4m:max-w-[400px] s4m:centerPos h-[100%] vlg:h-[360px] vlg:w-[100%] md:mx-[0] md:max-w-[auto]">
      <Bar options={options} data={data} width="100%" />
    </div>
  );
};
export default StackedBarChart;
