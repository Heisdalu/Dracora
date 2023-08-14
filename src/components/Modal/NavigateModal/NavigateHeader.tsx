import Context from "@/context/Context";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

type NavigateHeaderProps = {
  title: string;
  elements: { icon: any; name: string }[];
};

const NavigateHeader: React.FC<NavigateHeaderProps> = ({ title, elements }) => {
  const router = useRouter();
  const ctx = useContext(Context);

  const btnFunc = () => {
    if (!ctx.isDesktopScreen) {
      ctx.toggleModal();
    }
  };
  return (
    <aside className="flex flex-col space-y-[10px]">
      <h1 className="font-[400] text-16px mr-auto text-navModalHeader uppercase">
        {title}
      </h1>

      <div className="flex flex-col space-y-[7px]">
        {elements.map(({ icon, name }, i) => (
          <div key={i}>
            <Link
              onClick={btnFunc}
              href={`/${name == "ecommerce" ? "" : name}`}
              className={`text-navModalText py-0.75 px-[12px] rounded-[8px] flex space-x-20 items-center ${
                router.pathname === `/${name}` ||
                (router.pathname === "/" && name === "ecommerce")
                  ? "bg-lightBlue text-white"
                  : ""
              } hover:bg-lgBlack`}
            >
              <span>{icon}</span>
              <span className="capitalize text-16px font-[400] b">{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default NavigateHeader;
