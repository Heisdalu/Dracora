import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavigateHeaderProps = {
  title: string;
  elements: { icon: string; name: string }[];
};

const NavigateHeader: React.FC<NavigateHeaderProps> = ({ title, elements }) => {
  return (
    <aside className="flex flex-col space-y-[10px]">
      <h1 className="font-[400] text-16px mr-auto text-navModalHeader uppercase">
        {title}
      </h1>

      <div className="flex flex-col space-y-[7px]">
        {elements.map((el, i) => (
          <div
            key={i}
            className="text-navModalText py-0.75 px-[12px] rounded-[8px] flex space-x-20 items-center"
          >
            <Image src={el.icon} width={16} height={16} alt="" />
            <Link href="/orders" className="capitalize text-16px font-[400]">
              {el.name}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default NavigateHeader;
