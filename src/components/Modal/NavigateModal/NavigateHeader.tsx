import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NavigateHeaderProps = {
  title: string;
  elements: { icon: any; name: string }[];
};

const NavigateHeader: React.FC<NavigateHeaderProps> = ({ title, elements }) => {
  const router = useRouter();
  return (
    <aside className="flex flex-col space-y-[10px]">
      <h1 className="font-[400] text-16px mr-auto text-navModalHeader uppercase">
        {title}
      </h1>

      <div className="flex flex-col space-y-[7px]">
        {elements.map((el, i) => (
          <div key={i}>
            <Link
              href={`/${el.name == "ecommerce" ? "" : el.name}`}
              className={`text-navModalText py-0.75 px-[12px] rounded-[8px] flex space-x-20 items-center ${
                router.pathname === el.name ||
                (router.pathname === "/" && el.name === "ecommerce")
                  ? "bg-lightBlue text-white"
                  : ""
              }`}
            >
              <span>{el.icon}</span>
              <span className="capitalize text-16px font-[400] b">
                {el.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default NavigateHeader;
