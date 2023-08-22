import React, { FC } from "react";
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

const LineChart: FC = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Isreal",
        data: [3000, 8000, 12400, 17000, 1000],
        backgroundColor: "#FB9678",
        borderColor: "#FB9678",
        pointBorderWidth: 10,
      },
      {
        label: "Germany",
        data: [9500, 12000, 27670, 24000, 4000],
        backgroundColor: "#03C9D7",
        borderColor: "#03C9D7",
        pointBorderWidth: 10,
      },
      {
        label: "Congo",
        data: [500, 18800, 35000, 37000, 12000],
        backgroundColor: "#000",
        borderColor: "#000",
        pointBorderWidth: 10,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#686868",
        },
      },
      y: {
        border: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
  };
  return <Line options={options} data={data} />;
};
export default LineChart;
