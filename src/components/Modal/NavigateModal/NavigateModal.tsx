import React from "react";
import Image from "next/image";
import NavigateHeader from "./NavigateHeader";
import { pages, apps, charts } from "@/constants/Modal";

const NavigateModal: React.FC = () => {
  const dashboard = [{ icon: "/navIcon/ecommerce.svg", name: "ecommerce" }];

  return (
    <div className="navigateModal bg-white shadow-m1 max-w-[250px] border-1 w-[100%] fixed top-[0] z-[2] overflow-scroll h-[100vh] overflow-x-hidden md:sticky">
      <nav className=" flex flex-col p-[1rem]">
        <div className="flex">
          <h1 className="flex items-center space-x-[12px]">
            <span>
              <Image
                src="/dracora_logo.png"
                height={30}
                width={30}
                alt="Dracora Logo"
              />
            </span>
            <span className="text-20px font-extrabold">Dracora</span>
          </h1>

          <span className="ml-[auto] flex items-center justify-center md:hidden">
            <Image src="/navIcon/exit.svg" width={20} height={20} alt="" />
          </span>
        </div>

        <div className="my-2 py-1 flex flex-col space-y-[1.3rem]">
          <NavigateHeader title="dashboard" elements={dashboard} />
          <NavigateHeader title="pages" elements={pages} />
          <NavigateHeader title="apps" elements={apps} />
          <NavigateHeader title="charts" elements={charts} />
          <NavigateHeader title="charts" elements={charts} />
        </div>
      </nav>
    </div>
  );
};
export default NavigateModal;
