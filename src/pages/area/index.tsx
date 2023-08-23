import React, { FC, useEffect, useState } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useWidth from "@/hook/useWidth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Area: FC = () => {
  const { ready, isBigScreen } = useWidth();

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Nigeria",
        data: [100, 300, 400, 250, 500, 600, 100],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#95c7ed92",
        pointBorderWidth: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      datalabels: {
        display: false,
      },
    },

    interaction: {
      intersect: false,
    },
  };
  return (
    <div>
      <HomePageContainer>
        <div className="h-[100vh] lg:h-[auto]">
          <div className="rounded-[24px] bg-white p-1 md:p-2">
            <h1 className="text-otherHeader text-30px font-[800]">Area</h1>
            <p className="mt-1 text-center">Glaucoma Rate</p>
            <div className="mt-2 md:max-w-[400px] vlg:max-w-[900px] mx-auto">
              {ready && (
                <Line
                  options={options}
                  data={data}
                  height={isBigScreen ? "auto" : "500px"}
                />
              )}
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default Area;
