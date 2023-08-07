import EarningStats from "@/components/HomePage/EarningStats";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import React, { useContext } from "react";
import RevenueStats from "@/components/HomePage/RevenueStats";
import Context from "@/context/Context";

export default function Home() {
  // const toggleActive = ()
  // console.log('homeeee');
  const { activeModal } = useContext(Context);

  return (
    <div className="border-1 border-red md:flex">
      <HomePageContainer>
        <main>
          <EarningStats />
          <RevenueStats active={activeModal} />
          <div className="flex flex-col space-y-[2.5rem]"></div>
        </main>
      </HomePageContainer>
    </div>
  );
}
