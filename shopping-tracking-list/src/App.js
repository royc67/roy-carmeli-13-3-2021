import Navbar from "./components/Navbar";
import useApp from "./Hooks/useApp";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <div>
      <Navbar />
      <AppProvider></AppProvider>
    </div>
  );
}

export default App;
