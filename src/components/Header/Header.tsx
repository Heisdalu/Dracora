import Image from "next/image";
import React, { MouseEventHandler } from "react";
import MainNavigation from "./MainNavigation";

interface HeaderProps {
  toggle: MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  
  return (
    <div className="bg-mainBg border-1 py-[8px] sticky top-[0rem] mb-[2rem] md:relative md:top[0] md:mt-1 md:py-[0]">
      <header>
        <nav className="flex">
          <button
            onClick={toggle}
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
