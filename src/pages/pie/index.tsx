import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { FC } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    tooltip: false,
    datalabels: {
      formatter: (value: any, context: any) => {
        const total: number = context.dataset.data.reduce(
          (acc: number, cur: number) => acc + cur,
          0
        );
        const percentage = ((value * 100) / total).toFixed(2) + "%";
        return percentage;
      },
      color: "#fff",
    },
  },
};

const data = {
  labels: ["Phones", "Books", "Groceries", "Clothes"],
  datasets: [
    {
      label: "Revenues",
      data: [800, 400, 150, 500],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "#404041",
      ],
      hoverOffset: 20,
    },
  ],
};

const Pie: FC = () => {
  return (
    <div>
      <HomePageContainer>
        <div className="h-[100vh] lg:h-[auto]">
          <div className="rounded-[24px] bg-white p-1 md:p-2">
            <h1 className="text-otherHeader text-30px font-[800]">Pie</h1>
            <p className="mt-1 text-center">Items Sold Review in 2021</p>
            <div className="centerPos mt-2 md:max-w-[400px] mx-auto">
              <Doughnut
                data={data}
                options={options}
                className="max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default Pie;
