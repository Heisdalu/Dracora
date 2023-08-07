import React, { ReactNode, useState, useEffect, useContext } from "react";
import NavigateModal from "../Modal/NavigateModal/NavigateModal";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Context from "@/context/Context";
import { stateTypes } from "@/constants/Modal";

interface HomePageContainerProps {
  children: ReactNode;
}

const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  // const [active, setActive] = useState(false);
  const ctx: stateTypes = useContext(Context);

  console.log(ctx);

  // const toggleActive = (): void => {
  //   setActive((prev) => !prev);
  // };

  // const activateToggle = (): void => {
  //   setActive(true);
  // };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");

    function handleMediaQuery() {
      if (mediaQuery.matches) {
        // This code will execute when the screen size matches the media query
        // activateToggle();
        ctx.toggleModal(true);
      }
    }
    handleMediaQuery();
  }, []);

  return (
    <>
      {ctx.activeModal && <NavigateModal toggle={ctx.toggleModal} />}
      <Container>
        <Header toggle={ctx.toggleModal} />

        <div>{children}</div>
      </Container>
    </>
  );
};
export default HomePageContainer;
