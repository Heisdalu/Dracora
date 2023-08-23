import React, { FC } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const data = {
    labels: ["Giggs", "Xavi", "Iniesta", "Modric", "Kroos", "Lampard"],
    datasets: [
      {
        label: "Football Ability",
        data: [60, 70, 80, 65, 55, 60],
        backgroundColor: "#03C9D7",
        borderColor: "#374151",
        borderWidth: 2,
        pointBorderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
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
            <h1 className="text-otherHeader text-30px font-[800]">Pie</h1>
            <p className="mt-1 text-center">Football Review in 2014</p>
            <div className="centerPos mt-2 md:max-w-[400px] mx-auto">
              <Radar data={data} options={options} />;
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default RadarChart;
