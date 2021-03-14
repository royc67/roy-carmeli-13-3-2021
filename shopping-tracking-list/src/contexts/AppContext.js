import { useReducer, createContext } from "react";

export const AppContext = createContext();

const ACTIONS = {
  ADD_ITEM: "addItem",
  ARCHIVE_ITEM: "archive",
  REACTIVE_ITEM: "reactiveItem",
  SWITCH_CURRENCY: "switchCurrency",
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
  console.log(`action ${action.type} fired`, action.payload);
  console.log("prevState", state);
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
    case ACTIONS.SWITCH_CURRENCY:
      return { ...state, currency: action.payload.newValue };

    default:
      return { ...state };
  }
};

export function AppProvider({ children }) {
  const value = useReducer(appReducer, INITIAL_STATE());

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
