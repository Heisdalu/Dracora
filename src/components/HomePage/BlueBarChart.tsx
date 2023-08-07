import { FC } from "react";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BlueBarChart: FC = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

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
      intersect: true,
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [9000, 23459, 29678, 11400, 31500],
        backgroundColor: "#fff",
        hoverBackgroundColor: '#fff'
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
};
export default BlueBarChart;
