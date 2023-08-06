import { useReducer, ReactNode } from "react";
import Context from "./Context";

interface stateTypes {
  activeModal: boolean;
  toggleModal: Function;
}
type Props = {
  children: ReactNode;
};

const initial: stateTypes = {
  activeModal: false,
  toggleModal: () => {},
};

enum DataConstant {
  MODAL = "MODAL",
}

interface actionTypes {
  type: string;
  state?: boolean;
}

const dataReducer = (state: stateTypes, action: actionTypes) => {
  if (action.type === DataConstant.MODAL) {
    return {
      ...state,
      activeModal: action.state ? true : !state.activeModal
    };
  }

  return state;
};

const Provider = ({ children }: Props) => {
  const [dataState, dispatch] = useReducer(dataReducer, initial);

  const toggleModalState = (state = false) => {
    dispatch({ type: DataConstant.MODAL, state: state });
  };

  const valueState: stateTypes = {
    ...dataState,
    toggleModal: toggleModalState,
  };

  return <Context.Provider value={valueState}>{children}</Context.Provider>;
};
export default Provider;
