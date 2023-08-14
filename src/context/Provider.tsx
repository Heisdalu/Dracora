import { useReducer, ReactNode } from "react";
import Context from "./Context";
import { DataConstant, stateTypes, initial } from "@/constants/Modal";

type Props = {
  children: ReactNode;
};

interface actionTypes {
  type: string;
  state?: boolean;
}

const dataReducer = (state: stateTypes, action: actionTypes) => {
  if (action.type === DataConstant.MODAL) {
    return {
      ...state,
      activeModal: action.state ? true : !state.activeModal,
    };
  }

  if (action.type === DataConstant.CHECK_SCREEN) {
    return {
      ...state,
      isDesktopScreen: true,
    };
  }

  return state;
};

const Provider = ({ children }: Props) => {
  const [dataState, dispatch] = useReducer(dataReducer, initial);

  const toggleModalState = (state = false) => {
    // console.log(state);
    dispatch({ type: DataConstant.MODAL, state: state });
  };

  const checkMobileScreen = () => {
    dispatch({ type: DataConstant.CHECK_SCREEN });
  };

  const valueState: stateTypes = {
    ...dataState,
    toggleModal: toggleModalState,
    isMobileFunc: checkMobileScreen,
  };

  return <Context.Provider value={valueState}>{children}</Context.Provider>;
};
export default Provider;
