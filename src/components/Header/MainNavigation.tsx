import React from "react";
import Image from "next/image";

const MainNavigation: React.FC = () => {
  return (
    <div className="ml-auto flex items-center" title="cart">
      <button aria-label="cart" className="p-0.75">
        <Image src="/headerIcon/cart.svg" width={20} height={20} alt="" />
      </button>
      
      <button
        aria-label="message"
        title="messages"
        className="p-0.75 message relative"
      >
        <Image src="/headerIcon/message.svg" width={20} height={20} alt="" />
      </button>

      <button
        aria-label="notification"
        title="notification"
        className=" p-0.75 notification relative"
      >
        <Image
          src="/headerIcon/notification.svg"
          width={20}
          height={20}
          alt=""
        />
      </button>

      <button
        aria-label="user profile"
        title="Profile"
        className="p-[4px] flex justify-center items-start space-x-[8px]"
      >
        <Image src="/headerIcon/divineAvi.jpg" width={32} height={32} alt="" />
        <p className="centerPos text-[0.875rem] text-navModalHeader mt-[5px]">
          Hi, <span className="ml-[6.12px] font-[700]">Divine</span>
          <span className="ml-[6.12px]">
            <Image src="/headerIcon/down.svg" width={14} height={14} alt="" />
          </span>
        </p>
      </button>
    </div>
  );
};
export default MainNavigation;
