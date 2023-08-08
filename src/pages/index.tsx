import EarningStats from "@/components/HomePage/EarningStats";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import React, { useContext } from "react";
import RevenueStats from "@/components/HomePage/RevenueStats";
import Context from "@/context/Context";
import ListStats from "@/components/HomePage/ListStats";
import { transactionData } from "@/constants/Data";
import SalesOverviewChart from "@/components/HomePage/Charts/SalesOverviewChart";

export default function Home() {
  // const toggleActive = ()
  // console.log('homeeee');
  const { activeModal } = useContext(Context);

  const data: {
    path: string;
    title: string;
    subTitle: string;
    isRed: boolean;
    price: number;
  }[] = [
    {
      path: "/transactIcon/Dollar.svg",
      title: "Paypal Transfer",
      subTitle: "Money Added",
      isRed: false,
      price: 350,
    },
    {
      path: "/transactIcon/Wallet.svg",
      title: "Wallet",
      subTitle: "Bill Payment",
      isRed: true,
      price: 590,
    },
    {
      path: "/transactIcon/CreditCard.svg",
      title: "Wallet",
      subTitle: "Bill Payment",
      isRed: true,
      price: 590,
    },
  ];

  return (
    <div className="border-1 border-red md:flex">
      <HomePageContainer>
        <main>
          <EarningStats />
          <RevenueStats active={activeModal} />
          <section
            className={`border-1 flex flex-col space-y-[2.5rem] my-[1.5rem] vlg:grid ${
              activeModal ? "" : "vlg:[grid-template-columns:1fr_2fr] vlg:space-y-[0]"
            }`}
          >
            <div
              className={`rounded-[16px] p-1 bg-white border-1 space-y-[2rem] s4m:max-w-[450px] s4m:w-100 s4m:mx-auto ${
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
            {/* className="s4m:max-w-[600px] s4m:w-100 s4m:mx-auto" */}
            <div className="border-1 rounded-[16px] p-1 bg-white space-y-1 s4m:max-w-[800px] s4m:w-100 s4m:mx-auto">
              <div className="flex items-center">
                <h1 className="mr-1 border-1 break-words font-[600] text-black text-20px">
                  Sales Overview
                </h1>
                <div className="rounded-[6px] border-1 ml-auto p-[9px] centerPos border-[#0000001a]">
                  <select name="date" id="date" className="outline-none">
                    <option value="May 2021">May 2021</option>
                    <option value="May 2021">Jun 2021</option>
                    <option value="May 2021">Aug 2021</option>
                  </select>
                </div>
              </div>
              <div>
                <SalesOverviewChart active={activeModal}/>
              </div>
            </div>
          </section>
        </main>
      </HomePageContainer>
    </div>
  );
}
