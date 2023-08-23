import React, { FC } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import useWidth from "@/hook/useWidth";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BubbleChart: FC = () => {
  const { ready, isBigScreen } = useWidth();
  const data = {
    datasets: [
      {
        label: "Coal sediments",
        data: Array.from({ length: 100 }, () => ({
          x: getRandomInRange(-50, 50),
          y: getRandomInRange(-50, 50),
          r: getRandomInRange(-50, 50),
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sandstone",
        data: Array.from({ length: 100 }, () => ({
          x: getRandomInRange(-50, 50),
          y: getRandomInRange(-50, 50),
          r: getRandomInRange(-50, 50),
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div>
      <HomePageContainer>
        <div className="h-[100vh] lg:h-[auto]">
          <div className="rounded-[24px] bg-white p-1 md:p-2">
            <h1 className="text-otherHeader text-30px font-[800]">Bubble</h1>
            <p className="mt-1 text-center">Minerals Deposits</p>
            <div className="mt-2 md:max-w-[400px] vlg:max-w-[900px] mx-auto">
              {ready && (
                <Bubble
                  options={options}
                  data={data}
                  height={isBigScreen ? "auto" : 500}
                />
              )}
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default BubbleChart;
