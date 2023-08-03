import Image from "next/image";
import React from "react";
import MainNavigation from "./MainNavigation";

const Header: React.FC = () => {
  return (
    <div className="border-1 py-[8px] sticky top-[1rem] z-[1] mb-[2rem] md:relative md:top[0] md:py-[0]">
      <header>
        <nav className="flex">
          <button
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
