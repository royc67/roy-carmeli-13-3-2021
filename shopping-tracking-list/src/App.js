import Navbar from "./components/Navbar.jsx";
// import useApp from "./Hooks/useApp";
import { AppProvider } from "./contexts/AppContext";
import PurchaseByItem from "./pages/PurchaseByItem";
import PurchaseByStore from "./pages/PurchaseByStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/purchase/byItem" component={PurchaseByItem} />
            <Route exact path="/purchase/byStore" component={PurchaseByStore} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
