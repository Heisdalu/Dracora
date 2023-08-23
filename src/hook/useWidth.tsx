import React, { useState, useEffect } from "react";

interface Result {
  ready: boolean;
  isBigScreen: boolean;
}

const useWidth = (): Result => {
  const [ready, setReady] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    let mql: MediaQueryList = window.matchMedia("(min-width: 1000px)");
    setReady(true);
    setIsBigScreen(mql.matches);
  }, []);

  return { ready, isBigScreen };
};
export default useWidth;
