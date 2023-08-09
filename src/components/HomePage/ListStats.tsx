import Image from "next/image";
import React, { FC } from "react";

type ListItem = {
  path: string;
  pathColor: string;
  title: string;
  subTitle: string;
  isRed: boolean;
  price: number;
};

type ListProps = {
  data: ListItem[];
};

const ListStats: FC<ListProps> = ({ data }) => {

  return (
    <div className=" flex flex-col space-y-1">
      {data.map((el: ListItem, i: number) => (
        <div
          key={i}
          className="grid [grid-template-columns:0.8fr_3fr_1fr] [grid-gap:1rem]"
        >
          <div
            className={`h-[56px] w-[56px] centerPos rounded-[8px] ${
              el.pathColor === "yellow"
                ? "bg-yellow"
                : el.pathColor === "pink"
                ? "bg-pink"
                : el.pathColor === "blue"
                ? "bg-[#E5FAFB]"
                : el.pathColor === "green"
                ? "bg-[#00C292]"
                : "bg-[#FB9678]"
            }`}
          >
            <Image src={el.path} width={15} height={24} alt="" />
          </div>
          <div className="">
            <h1
              className="font-[600] text-black text-16px break-all"
              aria-label="Transaction title"
            >
              {el.title}
            </h1>
            <p
              className="text-14px font-[400] text-navModalHeader break-all"
              aria-label="Transaction Made"
            >
              {el.subTitle}
            </p>
          </div>

          <p
            aria-label="price"
            className={`text-right text-1 ${
              el.isRed ? "text-red" : "text-green"
            } font-[400]`}
          >
            {`${el.isRed ? "-" : "+"}$${el.price}`}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ListStats;
