import React, { useState } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import LineChart from "@/components/Line/LineChart";

const Line = () => {
  return (
    <div>
      <HomePageContainer>
        <div className="h-[100vh] lg:h-[auto]">
          <div className="rounded-[24px] bg-white p-1 md:p-2">
            <h1 className="text-otherHeader text-30px font-[800]">Line</h1>
            <p className="mt-1 text-center">Birth Rate</p>
            <div className="mt-2 md:max-w-[400px] vlg:max-w-[900px] mx-auto">
              <LineChart />
            </div>
          </div>
        </div>
      </HomePageContainer>
    </div>
  );
};
export default Line;
