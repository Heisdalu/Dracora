import {
  EcommerceIcon,
  CustomersIcon,
  OrderIcon,
  EmployeeIcon,
  KanbanIcon,
  EditorIcon,
  LineIcon,
  AreaIcon,
  BarIcon,
  PieIcon,
  BubbleIcon,
  ScatterIcon,
} from "@/components/Modal/NavigateModal/NavigateIcon";

export const dashboard = [{ icon: <EcommerceIcon />, name: "ecommerce" }];

export const pages = [
  { icon: <OrderIcon />, name: "orders" },
  { icon: <EmployeeIcon />, name: "employees" },
  { icon: <CustomersIcon />, name: "customers" },
];

export const apps = [
  { icon: <KanbanIcon />, name: "kanban" },
  { icon: <EditorIcon />, name: "editor" },
];

export const charts = [
  { icon: <LineIcon />, name: "line" },
  { icon: <AreaIcon />, name: "area" },
  { icon: <BarIcon />, name: "bar" },
  { icon: <PieIcon />, name: "pie" },
  { icon: <BubbleIcon />, name: "bubble" },
  { icon: <ScatterIcon />, name: "radar" },
];

export enum DataConstant {
  MODAL = "MODAL",
  CHECK_SCREEN = "CHECK_SCREEN",
}

export interface stateTypes {
  activeModal: boolean;
  isDesktopScreen: boolean;
  isMobileFunc: Function;
  toggleModal: Function;
}

export const initial: stateTypes = {
  activeModal: false,
  isDesktopScreen: false,
  isMobileFunc: () => {},
  toggleModal: () => {},
};
