import React, { FC } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar as BarChat } from "react-chartjs-2";
import useWidth from "@/hook/useWidth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bar: FC = () => {
  const { ready, isBigScreen } = useWidth();

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: [
          9000, 23459, 29678, 11400, 31500, 23000, 5000, 34000, 18000, 7000,
          18340, 20567,
        ],
        backgroundColor: "#03C9D7",
        hoverBackgroundColor: "#03C9D7",
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
      datalabels: {
        display: false,
      },
    },
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
        grid: {
          display: true,
        },
      },
    },
    interaction: {
      intersect: true,
    },
  };

  return (
    <div>
      <HomePageContainer>
        <div className="h-[100vh] lg:h-[auto]">
          <div className="rounded-[24px] bg-white p-1 md:p-2">
            <h1 className="text-otherHeader text-30px font-[800]">Bar</h1>
            <p className="mt-1 text-center">Greece Expenditures 2021</p>
            <div className="mt-2 md:max-w-[400px] vlg:max-w-[900px] mx-auto">
              {ready && (
                <BarChat
                  options={options}
                  height={isBigScreen ? "auto" : "500px"}
                  data={data}
                />
              )}
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default Bar;
