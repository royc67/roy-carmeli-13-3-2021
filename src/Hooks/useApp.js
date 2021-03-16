import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useApp() {
  return useContext(AppContext);
}
