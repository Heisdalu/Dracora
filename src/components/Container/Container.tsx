import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="py-1 px-0.5 bg-mainBg md:px-2 md:w-100 md:pt-[0]">{children}</div>;
};
export default Container;
