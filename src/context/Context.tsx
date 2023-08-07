import { stateTypes } from "@/constants/Modal";
import React, { createContext } from "react";

const initial: stateTypes = {
  activeModal: false,
  toggleModal: () => {},
};

const Context = createContext(initial);

export default Context;
