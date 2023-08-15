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

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");

    function handleMediaQuery() {
      if (mediaQuery.matches) {
        // This code will execute when the screen size matches the media query
        // activateToggle();
        ctx.toggleModal(true);
        ctx.isMobileFunc();
      }
    }
    handleMediaQuery();
  }, []);

  return (
    <div className="md:flex">
      {ctx.activeModal && <NavigateModal toggle={ctx.toggleModal} />}
      <Container>
        <Header toggle={ctx.toggleModal} />

        <div>{children}</div>
        <div className="text-center my-2 mt-[4rem]">
          <p className="font-[400] text-navModalText text-16px">
            © {new Date().getFullYear()} All rights reserved by Dracora.com
          </p>
        </div>
      </Container>
    </div>
  );
};
export default HomePageContainer;
