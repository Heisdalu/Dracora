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

interface BudgetChartProps {
  dataArr?: number[];
  color?: string;
}

const BudgetChart: FC<BudgetChartProps> = ({ dataArr, color }) => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Budgets",
        data: dataArr ? dataArr : [9500, 12000, 27670, 24000, 40000],
        backgroundColor: "#fff",
        borderColor: color ? color : "#03C9D7",
        pointBorderWidth: 2,
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

// elements: {
//       point: {
//         pointBorderWidth: 10,
//       },
//     },
