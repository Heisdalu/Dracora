import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart: FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["Phones", "Books", "Groceries", "Clothes"],
    datasets: [
      {
        label: "Revenues",
        data: [1000, 400, 350, 700],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#404041",
        ],
        hoverOffset: 10,
      },
    ],
  };
  return (
    <div className="w-[100%] max-w-[120px] ml-auto md:max-w-[150px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default SalesPieChart;
