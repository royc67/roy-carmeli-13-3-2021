import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const AppContext = createContext();

const ACTIONS = {
  ADD_ITEM: "addItem",
  ARCHIVE_ITEM: "archiveItem",
  REACTIVE_ITEM: "reactiveItem",
  SWITCH_CURRENCY: "switchCurrency",
  UPDATE_CONVERTER: "updateConverter",
};

function INITIAL_STATE() {
  const initialState = {
    deliveryItems: [],
    archiveItems: [],
    currency: "USD",
    converter: 0,
  };

  return initialState;
}

const appReducer = (state, action) => {
  switch (action.type) {
    // add item
    case ACTIONS.ADD_ITEM:
      const id = uuidv4();
      const newDeliveryItem = { ...action.payload.item, id };
      const { deliveryItems } = state;
      return {
        ...state,
        deliveryItems: [...deliveryItems, newDeliveryItem],
      };
    // archive item
    case ACTIONS.ARCHIVE_ITEM:
      const itemIndex = state.deliveryItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.deliveryItems.splice(itemIndex, 1)[0];
      const newArchiveItems = [...state.archiveItems, item];

      return {
        ...state,
        archiveItems: newArchiveItems,
      };
    case ACTIONS.REACTIVE_ITEM:
      const archivedItemIndex = state.archiveItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const archiveItem = state.archiveItems.splice(archivedItemIndex, 1)[0];
      const newDeliveryItems = [...state.deliveryItems, archiveItem];

      return {
        ...state,
        deliveryItems: newDeliveryItems,
      };
    case ACTIONS.UPDATE_CONVERTER:
      return { ...state, converter: action.payload.newValue };
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
