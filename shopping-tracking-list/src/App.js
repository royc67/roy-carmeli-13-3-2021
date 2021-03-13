import Navbar from "./components/Navbar";
import { useReducer } from "react";

const ACTIONS = {
  ADD_ITEM: "addItem",
  ARCHIVE_ITEM: "archive",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      break;

    case ACTIONS.ARCHIVE:
      break;

    default:
      return { ...state };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    deliveryItems: [],
    archivedItems: [],
  });

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
