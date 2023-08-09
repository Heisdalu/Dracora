import Image from "next/image";
import React, { MouseEventHandler } from "react";
import MainNavigation from "./MainNavigation";

interface HeaderProps {
  toggle: MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  const toggleModal = () => {
    toggle(false);
  };

  return (
    <div className="bg-mainBg py-[8px] sticky top-[0rem] mb-[2rem] md:relative md:top[0] md:mt-1 md:py-[0]">
      <header>
        <nav className="flex">
          <button
            onClick={toggleModal}
            aria-label="hamburger"
            className="p-0.75 bg-[#F7F7F7] rounded-[50%]"
          >
            <Image
              src="/headerIcon/hamburger.svg"
              width={16}
              height={16}
              alt=""
            />
          </button>

          <MainNavigation />
        </nav>
      </header>
    </div>
  );
};
export default Header;
