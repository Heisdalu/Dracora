export const pages = [
  { icon: "/navIcon/orders.svg", name: "orders" },
  { icon: "/navIcon/employee.svg", name: "employees" },
  { icon: "/navIcon/customer.svg", name: "customers" },
];

export const apps = [
  { icon: "/navIcon/calender.svg", name: "calendar" },
  { icon: "/navIcon/kanban.svg", name: "kanban" },
  { icon: "/navIcon/editor.svg", name: "editor" },
  { icon: "/navIcon/colorPicker.svg", name: "color-Picker" },
];

export const charts = [
  { icon: "/navIcon/line.svg", name: "line" },
  { icon: "/navIcon/area.svg", name: "area" },
  { icon: "/navIcon/bar.svg", name: "bar" },
  { icon: "/navIcon/pie.svg", name: "pie" },
  { icon: "navIcon/bubble.svg", name: "bubble" },
  { icon: "/navIcon/scatter.svg", name: "scatter" },
  { icon: "/navIcon/pyramid.svg", name: "pyramid" },
];


export enum DataConstant {
  MODAL = "MODAL",
}

export interface stateTypes {
  activeModal: boolean;
  toggleModal: Function;
}