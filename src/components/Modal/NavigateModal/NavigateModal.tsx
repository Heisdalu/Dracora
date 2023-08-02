import React from "react";
import Image from "next/image";
import NavigateHeader from "./NavigateHeader";

const NavigateModal: React.FC = () => {
  const dashboard = [{ icon: "/navIcon/ecommerce.svg", name: "Ecommerce" }];
  const pages = [
    { icon: "/navIcon/orders.svg", name: "Orders" },
    { icon: "/navIcon/employee.svg", name: "Employees" },
    { icon: "/navIcon/customer.svg", name: "Customers" },
  ];

  const apps = [
    { icon: "/navIcon/calender.svg", name: "Calendar" },
    { icon: "/navIcon/kanban.svg", name: "Kanban" },
    { icon: "/navIcon/editor.svg", name: "Editor" },
    { icon: "/navIcon/colorPicker.svg", name: "Color-Picker" },
  ];

  return (
    <div className="bg-white">
      <nav className=" flex flex-col border-1 p-[1rem] max-w-[250px] w-[100%]">
        <div className="flex">
          <h1 className="border-1 flex items-center space-x-[12px]">
            <span>
              <Image
                src="/dracora_logo.png"
                height={30}
                width={30}
                alt="Dracora Logo"
              />
            </span>
            <span className="text-20px font-extrabold">Dracora</span>
          </h1>

          <span className="ml-[auto] flex items-center justify-center">
            <Image src="/navIcon/exit.svg" width={20} height={20} alt="" />
          </span>
        </div>

        <div className="my-2 py-1 flex flex-col space-y-[1.3rem]">
          <NavigateHeader title="DASHBOARD" elements={dashboard} />
          <NavigateHeader title="PAGES" elements={pages} />
          <NavigateHeader title="APPS" elements={apps} />
        </div>
      </nav>
    </div>
  );
};
export default NavigateModal;
