import React from "react";
import BudgetChart from "./BudgetChart";
import StackedBarChart from "./StackedBarChart";
import BlueBarChart from "./BlueBarChart";
import SalesPieChart from "./SalesPieChart";

interface Props {
  active: boolean;
}

const RevenueStats: React.FC<Props> = ({ active }) => {
 

  return (
    <section
      className={`border-1 mt-0.75 flex flex-col space-y-[3.25rem] vlg:grid vlg:[grid-template-columns:2fr_1fr] vlg:space-y-[0] ${
        active ? "vlg:space-x-[3rem]" : "vlg:space-x-[0]"
      }`}
    >
      <div className=" bg-white rounded-[16px] flex flex-col space-y-[2.5rem] p-1 md:max-w-[760px] md:w-100 md:mx-auto vlg:mx-[0] vlg:ml-1">
        <div className="flex items-center ">
          <h1 className="text-black text-20px font-[600] flex flex-col s4m:flex-row s4m:space-x-[9px]">
            <span>Revenue</span>
            <span>Updates</span>
          </h1>

          <div className="ml-auto flex space-x-[15.47px]">
            <span className="flex items-center space-x-[8px] ">
              <span className="block h-[8px] w-[8px] bg-exDark rounded-[50%]"></span>
              <p className="font-[400] text-16px text-exDark">Expense</p>
            </span>
            <span className="flex items-center space-x-[8px]">
              <span className="block h-[8px] w-[8px] bg-exGreen rounded-[50%]"></span>
              <p className="font-[400] text-16px text-exGreen">Budget</p>
            </span>
          </div>
        </div>

        <div
          className={`flex flex-col space-y-[3.5rem] ${"md:grid md:grid-cols-2  md:space-y-[0] md:space-x-[0rem]"}`}
        >
          <div className={"border-r-1 border-r-[#0000001a] pr-2"}>
            <div className="flex items-center space-x-1">
              <h1 className="flex flex-col">
                <span className="text-[1.875rem] font-[600] text-black">
                  $97,570
                </span>
                <span className="text-[#6B7280] text-16px font-[400]">
                  Budget
                </span>
              </h1>
              <span className="block p-[0.4rem] rounded-[50%] bg-exGreen text-white">
                25%
              </span>
            </div>
            <div className="space-x-1 mt-1.5 md:mt-1">
              <h1 className="flex flex-col">
                <span className="text-[1.875rem] font-[600] text-black">
                  $43,480
                </span>
                <span className="text-[#6B7280] text-16px font-[400]">
                  Expense
                </span>
              </h1>
            </div>

            <div className="mt-2">
              <BudgetChart />

              <button className="mt-1.5 rounded-[10px] p-[0.8rem] text-16px font-[400] text-white bg-lightBlue ">
                Download Report
              </button>
            </div>
          </div>

          <div
            className={` ${active ? "vlg:pl-[2rem]" : "vlg:pl-[6rem]"}`}
          >
            <StackedBarChart />
          </div>
        </div>
      </div>

      <div className=" p-0.75 flex flex-col space-y-0.75  md:max-w-[500px] md:mx-auto vlg:mx-[0] vlg:max-w-[500px] vlg:pt-[0] vlg:pl-[0]">
        <div className=" p-1 space-y-1 bg-lightBlue rounded-[16px] vlg:space-y-[0]">
          <div className="flex">
            <h1 className="text-white text-24px font-[600]">Earnings</h1>
            <div className="ml-auto space-y-[1px]">
              <p className="text-white text-24px font-[600]">$67,345.25</p>
              <p className="text-white text-16px font-[400]">Monthly revenue</p>
            </div>
          </div>

          <BlueBarChart />
        </div>

        <div className=" p-1 rounded-[16px] bg-white centerPos flex flex-col">
          <div className="flex space-x-[50px]">
            <div className="flex flex-col-reverse justify-center">
              <h1 className="text-16px text-black font-[400]">Yearly sales</h1>
              <p className="text-20px text-black font-[600]">$52,869</p>
            </div>

            <SalesPieChart />
          </div>
        </div>
      </div>
    </section>
  );
};
export default RevenueStats;
