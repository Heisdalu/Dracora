import React, { MouseEventHandler } from "react";
import Image from "next/image";
import NavigateHeader from "./NavigateHeader";
import { dashboard, pages, apps, charts } from "@/constants/Modal";

interface NavigateModalProps {
  toggle: Function;
}

const NavigateModal: React.FC<NavigateModalProps> = ({ toggle }) => {
  const toggleModal = () => {
    toggle(false);
  };

  return (
    <>
      <div className="navigateModal bg-white shadow-m1 max-w-[250px] w-[100%] fixed top-[0] z-[3] overflow-scroll h-[100vh] overflow-x-hidden md:sticky">
        <nav className=" flex flex-col p-[1rem] relative bg-white">
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

            <span
              onClick={toggleModal}
              className="ml-[auto] flex items-center justify-center md:hidden"
            >
              <Image src="/exit.svg" width={20} height={20} alt="" />
            </span>
          </div>

          <div className="my-2 py-1 flex flex-col space-y-[1.3rem]">
            <NavigateHeader title="dashboard" elements={dashboard} />
            <NavigateHeader title="pages" elements={pages} />
            <NavigateHeader title="apps" elements={apps} />
            <NavigateHeader title="charts" elements={charts} />
          </div>
        </nav>
      </div>
      <div
        onClick={toggleModal}
        className="fixed top-[0] h-[100vh] w-100 bg-mdHidden z-[1] md:hidden"
      ></div>
    </>
  );
};
export default NavigateModal;
