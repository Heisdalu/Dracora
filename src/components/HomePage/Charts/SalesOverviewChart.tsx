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

interface Props {
  active: boolean;
}

const SalesOverviewChart: FC<Props> = ({active}) => {
  const labels = [2015, 2016, 2017, 2018, 2019, 2020, 2021];

  const data = {
    labels,
    datasets: [
      {
        label: "Nigeria",
        data: [45, 72, 18, 85, 23, 93, 67],
        backgroundColor: "#03C9D7",
        borderColor: "#03C9D7",
        pointHoverBorderWidth: 10,
      },
      {
        label: "Canada",
        data: [15, 35, 90, 58, 42, 12, 75],
        backgroundColor: "#4ADE80",
        borderColor: "#4ADE80",
        pointHoverBorderWidth: 10,
      },
      {
        label: "England",
        data: [30, 63, 55, 87, 20, 98, 10],
        backgroundColor: "#000",
        borderColor: "#000",
        pointHoverBorderWidth: 10,
      },
    ],
  };

  const options: any = {
    responsive: true,
    elements: {
      point: {
        pointBorderWidth: 10,
      },
    },
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
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
  };
  return (
    <div className={`${active ? '' : 'vlg:mt-[4rem]'}`}>
      <Line options={options} data={data} />
    </div>
  );
};
export default SalesOverviewChart;
