import { useReducer, createContext } from "react";

export const AppContext = createContext();

const ACTIONS = {
  ADD_ITEM: "addItem",
  ARCHIVE_ITEM: "archive",
};

function INITIAL_STATE() {
  const initialState = {
    deliveryItems: [],
    archiveItems: [],
    currency: "USD",
  };

  return initialState;
}

const appReducer = (state, action) => {
  switch (action.type) {
    // add item
    case ACTIONS.ADD_ITEM:
      const { deliveryItems } = state;
      return {
        ...state,
        deliveryItems: [...deliveryItems, action.payload.item],
      };
    // archive item
    case ACTIONS.ARCHIVE:
      const { archivedItems } = state;
      return {
        ...state,
        archivedItems: [...archivedItems, action.payload.item],
      };
    default:
      return { ...state };
  }
};

export function AppProvider({ children }) {
  const value = useReducer(appReducer, INITIAL_STATE());

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
