import ls from "local-storage";
import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const AppContext = createContext();

const ACTIONS = {
  ADD_ITEM: "addItem",
  ARCHIVE_ITEM: "archiveItem",
  REACTIVE_ITEM: "reactiveItem",
  SWITCH_CURRENCY: "switchCurrency",
  UPDATE_CONVERTER: "updateConverter",
  ERROR: "error",
};

function INITIAL_STATE() {
  const storagedDeliveryItems = ls.get("deliveryItems");
  const storagedArchiveItems = ls.get("archiveItems");
  const initialState = {
    error: [false, ""],
    deliveryItems: storagedDeliveryItems
      ? JSON.parse(storagedDeliveryItems)
      : [],
    archiveItems: storagedArchiveItems ? JSON.parse(storagedArchiveItems) : [],
    currency: "USD",
    converter: 0,
  };

  return initialState;
}

function compareDates(a, b) {
  const aDate = new Date(a.dest).getTime();
  const bDate = new Date(b.dest).getTime();
  return aDate - bDate;
}

const appReducer = (state, action) => {
  let newDeliveryItems, newArchiveItems;

  switch (action.type) {
    // add item
    case ACTIONS.ADD_ITEM:
      const id = uuidv4();
      const newItem = {
        ...action.payload.item,
        id,
      };
      const { deliveryItems } = state;
      newDeliveryItems = [...deliveryItems, newItem].sort(compareDates);

      ls.set("deliveryItems", JSON.stringify(newDeliveryItems));

      return {
        ...state,
        deliveryItems: newDeliveryItems,
      };
    // archive item
    case ACTIONS.ARCHIVE_ITEM:
      const itemIndex = state.deliveryItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.deliveryItems.splice(itemIndex, 1)[0];
      newArchiveItems = [...state.archiveItems, item];

      ls.set("deliveryItems", JSON.stringify(state.deliveryItems));
      ls.set("archiveItems", JSON.stringify(newArchiveItems));

      return {
        ...state,
        archiveItems: newArchiveItems,
      };
    // reactive item
    case ACTIONS.REACTIVE_ITEM:
      const archivedItemIndex = state.archiveItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const archiveItem = state.archiveItems.splice(archivedItemIndex, 1)[0];
      newDeliveryItems = [...state.deliveryItems, archiveItem].sort(
        compareDates
      );
      ls.set("deliveryItems", JSON.stringify(newDeliveryItems));
      ls.set("archiveItems", JSON.stringify(state.archiveItems));

      return {
        ...state,
        deliveryItems: newDeliveryItems,
      };
    // update currency rate
    case ACTIONS.UPDATE_CONVERTER:
      if (!isNaN(action.payload.newValue))
        return { ...state, converter: action.payload.newValue };
      break;
    // curreny currency
    case ACTIONS.SWITCH_CURRENCY:
      if (["USD", "ILS"].includes(action.payload.newValue))
        return { ...state, currency: action.payload.newValue };
      break;

    // error handler
    case ACTIONS.ERROR:
      return { ...state, error: action.payload };

    default:
      break;
  }
  return { ...state };
};

export function AppProvider({ children }) {
  const value = useReducer(appReducer, INITIAL_STATE());

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
