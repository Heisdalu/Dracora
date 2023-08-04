import React, { ReactNode, useState, MouseEventHandler } from "react";
import NavigateModal from "../Modal/NavigateModal/NavigateModal";
import Container from "../Container/Container";
import Header from "../Header/Header";

interface HomePageContainerProps {
  children: ReactNode;
}

const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  console.log(active);

  const toggleActive = (): void => {
    setActive((prev) => !prev);
  };

  return (
    <>
      {active && <NavigateModal toggle={toggleActive} />}
      <Container>
        <Header toggle={toggleActive} />

        <div>{children}</div>
      </Container>
    </>
  );
};
export default HomePageContainer;
