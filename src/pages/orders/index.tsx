import React, { FC, useContext, useState } from "react";
import HomePageContainer from "@/components/HomePage/HomePageContainer";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
import { GetStaticProps } from "next";
import Context from "@/context/Context";
import Image from "next/image";
import TablePagination from "@/components/TablePagination/TablePagination";

type listState = {
  id: number;
  car: string;
  amount: string;
  fullName: string;
  images: string;
  country: string;
  status: string;
};

type OrderProps = {
  mock: listState[];
};

const Orders: FC<OrderProps> = ({ mock }) => {
  const { activeModal } = useContext(Context);
  const [tableRowData, setTableRowData] = useState<listState[]>([]);

  return (
    <HomePageContainer>
      <div
        className={`py-1 pt-[0] px-0.5 flex flex-col ${
          activeModal ? "" : "vlg:max-w-[1100px] mx-auto"
        }`}
      >
        <h1 className="text-[#0F172A] text-[1.875rem] font-[600]">Orders</h1>

        <div
          className={`mt-[1.5rem] ${
            activeModal ? "md:max-w-[420px] md:w-100 vlg:max-w-[1000px]" : ""
          } overflow-scroll`}
        >
          <table className="text-center">
            <tbody className=" flex flex-col space-y-0.5 border-dggray border-[1px]">
              <tr className="place-items-cente grid pt-0.5 [grid-template-columns:1fr_1fr_1fr_1fr_1fr_1fr_1fr] [grid-gap:1rem]">
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Images
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Item
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Customer Name
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Total Amount
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Status
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Order ID
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Location
                </th>
              </tr>

              {tableRowData.map((el, i) => (
                <tr
                  key={i}
                  className="py-1 border-t-[1px] border-dggray grid [grid-template-columns:1fr_1fr_1fr_1fr_1fr_1fr_1fr] [grid-gap:1rem] place-items-center"
                >
                  <td>
                    <div className="h-[70px] w-[auto] flex items-center pl-[10px]">
                      <Image
                        src={`https://picsum.photos/id/${el.id + 10}/70/80`}
                        width={70}
                        height={80}
                        style={{
                          borderRadius: "12px",
                        }}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="text-13px">{el.car}</td>
                  <td className="text-13px">{el.fullName}</td>
                  <td className="text-13px">{el.amount}</td>
                  <td
                    className={`text-13px text-white  p-0.5 md:px-1 rounded-[16px] ${
                      el.status === "completed"
                        ? "bg-[#8BE78B]"
                        : el.status === "pending"
                        ? "bg-[#FB9678]"
                        : el.status === "active"
                        ? "bg-lightBlue"
                        : "bg-[#f00]"
                    }`}
                  >
                    {el.status || "rejected"}
                  </td>
                  <td className="text-13px">{el.id}</td>
                  <td className="text-13px">{el.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-1 border-[1px] border-dggray mr-1 mt-1 md:mt-[0] pl-0.75">
          <TablePagination
            data={mock}
            startingPoint={1}
            updateTableRowData={setTableRowData}
          />
        </div>
      </div>
    </HomePageContainer>
  );
};
export default Orders;

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(collection(db, "data"));
  const [mock] = querySnapshot.docs.map((doc) => doc.data());

  if (querySnapshot.empty) {
    return {
      notFound: true,
    };
  }

  return {
    props: mock,
  };
};
