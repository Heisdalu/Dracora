import React, { ReactNode, useState, useEffect } from "react";
import NavigateModal from "../Modal/NavigateModal/NavigateModal";
import Container from "../Container/Container";
import Header from "../Header/Header";

interface HomePageContainerProps {
  children: ReactNode;
}

const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleActive = (): void => {
    setActive((prev) => !prev);
  };

  const activateToggle = (): void => {
    setActive(true);
  };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");

    function handleMediaQuery() {
      if (mediaQuery.matches) {
        // This code will execute when the screen size matches the media query
        activateToggle();
      }
    }
    handleMediaQuery();
  }, []);

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
