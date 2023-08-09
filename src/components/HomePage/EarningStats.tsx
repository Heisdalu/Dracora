import Image from "next/image";
import React from "react";

const EarningStats: React.FC = () => {
  return (
    <>
      <section className="flex flex-col space-y-1.5 p-0.75 lg:grid lg:[grid-template-columns:_1fr_2fr] lg:space-y-[0] [grid-gap:2rem]">
        <div className="bg-white w-100 rounded-[12px] flex flex-col space-y-[1.5rem] p-[1.5rem] md:p-2 vlg:p-1">
          <div className="flex">
            <div>
              <h1 className="text-navModalHeader text-16px font-[700] ">
                Earnings
              </h1>
              <p className="text-[1.5rem] text-black font-[400]">$70,598.23</p>
            </div>
            <span className="text-white centerPos ml-auto rounded-[50%] h-[50px] w-[50px] text-[1.5rem] bg-lightBlue">
              $
            </span>
          </div>
          <button className="font-[400] text-16px mr-auto p-0.75 text-white bg-lightBlue rounded-[10px]">
            Download
          </button>
        </div>

        <div className="grid grid-cols-2 [grid-gap:7px] s4m:grid-cols-3 lg:grid-cols-2 vlg:grid-cols-4">
          <div className="p-1 rounded-[16px] bg-white justify-self-end s4m:justify-self-auto">
            <span className="bg-[#E5FAFB] centerPos h-[50px] w-[50px] rounded-[50%] ">
              <Image src="/earning/people.svg" width={24} height={24} alt="" />
            </span>
            <div className="flex flex-col-reverse mt-[5px]">
              <h1 className="font-[400] mt-[5px] text-14px text-navModalHeader">
                Customers
              </h1>
              <div className="flex items-center space-x-[7.36px] vlg:space-x-[10px]">
                <h3 className="text-18px font-[600]">35,934</h3>
                <span className="text-14px text-red">-4%</span>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-[16px] bg-white justify-self-start s4m:justify-self-auto">
            <span className="bg-yellow centerPos h-[50px] w-[50px] rounded-[50%] ">
              <Image src="/earning/product.svg" width={24} height={24} alt="" />
            </span>
            <div className="flex flex-col-reverse mt-[5px]">
              <h1 className="font-[400] mt-[5px] text-14px text-navModalHeader">
                Products
              </h1>
              <div className="flex items-center space-x-[7.36px] vlg:space-x-[10px">
                <h3 className="text-18px font-[600]">5,934</h3>
                <span className="text-14px text-green">+27%</span>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-[16px] bg-white justify-self-end s4m:justify-self-auto">
            <span className="bg-[#FFF4E5] centerPos h-[50px] w-[50px] rounded-[50%] ">
              <Image src="/earning/sales.svg" width={24} height={24} alt="" />
            </span>
            <div className="flex flex-col-reverse mt-[5px]">
              <h1 className="font-[400] mt-[5px] text-14px text-navModalHeader">
                Sales
              </h1>
              <div className="flex items-center space-x-[7.36px] vlg:space-x-[10px">
                <h3 className="text-18px font-[600]">295,934</h3>
                <span className="text-14px text-green">+44%</span>
              </div>
            </div>
          </div>

          <div className="p-1 rounded-[16px] bg-white justify-self-start s4m:justify-self-auto s4m:[grid-area:2/2/3/3] lg:[grid-area:auto]">
            <span className="bg-[#E5FAFB] centerPos h-[50px] w-[50px] rounded-[50%] ">
              <Image src="/earning/refund.svg" width={24} height={24} alt="" />
            </span>
            <div className="flex flex-col-reverse mt-[5px]">
              <h1 className="font-[400] mt-[5px] text-14px text-navModalHeader">
                Refunds
              </h1>
              <div className="flex items-center space-x-[7.36px] vlg:space-x-[10px">
                <h3 className="text-18px font-[600]">35,934</h3>
                <span className="text-14px text-red">-10%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EarningStats;
