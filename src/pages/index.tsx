import EarningStats from "@/components/HomePage/EarningStats";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import React, { useContext } from "react";
import RevenueStats from "@/components/HomePage/RevenueStats";
import Context from "@/context/Context";
import ListStats from "@/components/HomePage/ListStats";
import { transactionData, LeaderIcons } from "@/constants/Data";
import SalesOverviewChart from "@/components/HomePage/Charts/SalesOverviewChart";
import { weeklyList } from "@/constants/Data";
import Image from "next/image";
import BudgetChart from "@/components/HomePage/Charts/BudgetChart";

export default function Home() {
  // const toggleActive = ()
  // console.log('homeeee');
  const { activeModal } = useContext(Context);

  return (
    <div className="md:flex">
      <HomePageContainer>
        <main>
          <EarningStats />
          <RevenueStats active={activeModal} />
          <section
            className={`flex flex-col space-y-[2.5rem] my-[1.5rem] vlg:grid ${
              activeModal
                ? ""
                : "vlg:[grid-template-columns:1fr_2fr] vlg:space-y-[0] vlg:[grid-gap:2.5rem]"
            }`}
          >
            <div
              className={`rounded-[16px] p-1 bg-white space-y-[2rem] s4m:max-w-[450px] s4m:w-100 s4m:mx-auto ${
                activeModal ? "" : "vlg:max-w-[none]"
              }`}
            >
              <div className="flex items-center">
                <h1 className="mr-1 break-words font-[600] text-black text-20px">
                  Recent Transactions
                </h1>
                <div className="rounded-[6px] border-1 ml-auto p-[9px] centerPos border-[#0000001a]">
                  <select name="date" id="date" className="outline-none">
                    <option value="May 2021">May 2021</option>
                    <option value="May 2021">Jun 2021</option>
                    <option value="May 2021">Aug 2021</option>
                  </select>
                </div>
              </div>
              <ListStats data={transactionData} />

              <div className="py-[14px] border-lgBlack border-t-[1px] flex items-center">
                <button className="bg-lightBlue text-white p-1 rounded-[10px] mr-1">
                  Add
                </button>
                <span className="text-navModalHeader ml-auto break-all">
                  36 Recent Transactions
                </span>
              </div>
            </div>

            <div
              className={`rounded-[16px] p-1 bg-white space-y-1 md:max-w-[450px] md:w-100 md:mx-auto ${
                activeModal ? "vlg:max-w-[800px]" : " vlg:max-w-[none] vlg:mx-[0]"
              }`}
            >
              <div className="flex items-center">
                <h1 className="mr-1 break-words font-[600] text-black text-20px">
                  Sales Overview
                </h1>
                <div className="rounded-[6px] ml-auto p-[9px] border-1 centerPos border-[#0000001a]">
                  <select name="date" id="date" className="outline-none">
                    <option value="May 2021">May 2021</option>
                    <option value="May 2021">Jun 2021</option>
                    <option value="May 2021">Aug 2021</option>
                  </select>
                </div>
              </div>
              <div>
                <SalesOverviewChart active={activeModal} />
              </div>
            </div>
          </section>

          {/* fourth part */}
          <section
            className={`mt-[3rem] space-y-1.5 s4m:max-w-[400px] s4m:mx-auto s4m:w-100 vlg:max-w-[none] vlg:mx-[0] vlg:grid vlg:grid-cols-3 vlg:[grid-gap:2rem] vlg:space-y-[0]`}
          >
            <div className="p-1 space-y-[2.5rem] bg-white rounded-[16px]">
              <div className="flex">
                <h1 className="text-20px font-[600] text-black">
                  Weekly Stats
                </h1>
                <button className="ml-auto">
                  <Image src="/weekly/dots.svg" width={15} height={4} alt="" />
                </button>
              </div>
              <div aria-label="Sales Stats">
                <ListStats data={weeklyList} />
              </div>

              <div
                className={`${
                  activeModal ? "" : "vlg:flex vlg:justify-center"
                }`}
              >
                <BudgetChart
                  dataArr={[700, 600, 970, 340, 450]}
                  color="#FB9678"
                />
              </div>
            </div>

            <div className="p-1 space-y-[1.5rem] bg-white rounded-[16px]">
              <div className="flex">
                <h1 className="text-20px font-[600] text-black">
                  MedicalPro Branding
                </h1>
                <button className="ml-auto">
                  <Image src="/weekly/dots.svg" width={15} height={4} alt="" />
                </button>
              </div>
              <div>
                <span className="bg-orange font-[400] text-[0.75rem] rounded-[8px] text-[#E5E7EB] px-[13px] py-[5px]">
                  16 June, 2021
                </span>
              </div>
              <div className="border-b-[1px] border-r-lgBlack flex space-x-1">
                <div className="border-r-[1px] border-r-lgBlack p-[5px] pr-[13px] space-y-[1px]">
                  <h1 className="text-navModalHeader font-[400] text-[0.75rem]">
                    Due Date
                  </h1>
                  <p className="text-14px text-black font-[400]">
                    Oct 23, 2021
                  </p>
                </div>
                <div className="border-r-1 border-r-lgBlack p-[5px] pr-[13px] space-y-[1px]">
                  <h1 className="text-navModalHeader font-[400] text-[0.75rem]">
                    Budget
                  </h1>
                  <p>$98,000</p>
                </div>
                <div className="border-r-1 border-r-lgBlack p-[5px] pr-[13px] space-y-[1px]">
                  <h1 className="text-navModalHeader font-[400] text-[0.75rem]">
                    Expense
                  </h1>
                  <p>$63,000</p>
                </div>
              </div>
              <div className="border-b-[1px] border-r-lgBlack pb-1">
                <h1>Teams</h1>
                <div className="flex space-x-1">
                  <p className="px-0.75 py-[1px] rounded-[8px] bg-[#FFA500] text-white text-14px font-[400]">
                    Bootstrap
                  </p>
                  <p className=" text-white text-14px font-[400] px-0.75 py-[1px] rounded-[8px] bg-[#FB9678]">
                    Angular
                  </p>
                </div>
              </div>

              <div className="space-y-[8px] pb-0.5">
                <h1 className="text-16px font-[600] text-black">Leaders</h1>
                <div className="flex space-x-1">
                  {LeaderIcons.map((el, i) => (
                    <span key={i}>
                      <Image src={el.path} width={32} height={32} alt="" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-[14px] border-lgBlack border-t-[1px] flex items-center">
                <button className="bg-lightBlue text-white p-1 rounded-[10px] mr-1">
                  Add
                </button>
                <span className="text-navModalHeader ml-auto break-all">
                  36 Recent Transactions
                </span>
              </div>
            </div>

            <div className="bg-white p-1 flex flex-col space-y-[1.5rem] rounded-[16px]">
              <div className="flex">
                <h1 className="text-20px font-[600] text-black">
                  Daily Activities
                </h1>
                <button className="ml-auto">
                  <Image src="/weekly/dots.svg" width={15} height={4} alt="" />
                </button>
              </div>
              <span>
                <Image
                  src="/product.jpg"
                  width={0}
                  height={0}
                  style={{ height: "auto", width: "100%" }}
                  sizes="100vw"
                  alt=""
                />
              </span>

              <div>
                <div className="space-y-[1px]">
                  <h1 className="text-18px font-[600] text-black">
                    React 18 coming soon!
                  </h1>
                  <p className="text-16px text-navModalHeader font-[400]">
                    By Divine Obi
                  </p>
                </div>

                <p className="my-1 text-14px font-[400] text-navModalHeader">
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <button className=" bg-lightBlue text-white text-16px p-0.75 rounded-[8px]">
                  Read More
                </button>
              </div>
            </div>
          </section>
          <div className="text-center my-2 mt-[4rem]">
            <p className="font-[400] text-navModalText text-16px">
              © {new Date().getFullYear()} All rights reserved by Dracora.com
            </p>
          </div>
        </main>
      </HomePageContainer>
    </div>
  );
}
