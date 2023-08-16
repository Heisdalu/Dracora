import HomePageContainer from "@/components/HomePage/HomePageContainer";
import Context from "@/context/Context";
import { useContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";
import TablePagination from "@/components/TablePagination/TablePagination";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import React, { FC } from "react";

type listState = {
  id: number;
  country: string;
  fullname: string;
  job: string;
  boss: string;
  date: string;
};

type CustomersProps = {
  mock: listState[];
};

const Customers: FC<CustomersProps> = ({
  mock,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { activeModal } = useContext(Context);
  const [tableRowData, setTableRowData] = useState<listState[]>([]);

  return (
    <HomePageContainer>
      <div
        className={`py-1 pt-[0] px-0.5 flex flex-col ${
          activeModal ? "" : "vlg:max-w-[1100px] mx-auto"
        }`}
      >
        <h1 className="text-[#0F172A] text-[1.875rem] font-[600]">Customers</h1>

        <div
          className={`mt-[1.5rem] ${
            activeModal ? "md:max-w-[420px] md:w-100 vlg:max-w-[1000px]" : ""
          } overflow-scroll`}
        >
          <table className="text-center">
            <tbody className=" flex flex-col space-y-0.5 border-dggray border-[1px]">
              <tr className="place-items-cente grid pt-0.5 [grid-template-columns:1fr_1fr_1fr_1fr_1fr] [grid-gap:1rem]">
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Customers
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Job
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Country
                </th>
                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Start Date
                </th>

                <th className="px-0.5 text-12px text-dgBlack font-[500]">
                  Customer ID
                </th>
              </tr>

              {tableRowData.map((el, i) => (
                <tr
                  key={i}
                  className="py-1 border-t-[1px] border-dggray grid [grid-template-columns:1fr_1fr_1fr_1fr_1fr] [grid-gap:1rem] "
                >
                  <td>
                    <div className="flex pl-[10px] flex-col md:flex-row md:items-center">
                      <Image
                        src={`https://picsum.photos/id/${el.id + 30}/70/80`}
                        width={30}
                        height={30}
                        style={{
                          borderRadius: "12px",
                        }}
                        alt=""
                      />
                      <div className="break-words text-left mt-[5px] md:pl-[10px] md:mt-[0]">
                        {el.fullname}
                      </div>
                    </div>
                  </td>
                  <td className="text-13px">{el.job}</td>
                  <td className="text-13px">{el.country}</td>
                  <td className="text-13px">{el.date}</td>
                  <td className="text-13px">{el.id}</td>
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
export default Customers;

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(collection(db, "employees"));
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
