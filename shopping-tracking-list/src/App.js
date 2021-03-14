import Navbar from "./components/Navbar.jsx";
// import useApp from "./Hooks/useApp";
import { AppProvider } from "./contexts/AppContext";
import PurchaseByItem from "./pages/PurchaseByItem";
import PurchaseByStores from "./pages/PurchaseByStores";
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Grid>
      <AppProvider>
        <Router>
          <Redirect to="/purchase/byItem/delivery" />
          <Navbar />
          <Switch>
            <Route path="/purchase/byItem" component={PurchaseByItem} />
            <Route
              exact
              path="/purchase/byStores"
              component={PurchaseByStores}
            />
          </Switch>
        </Router>
      </AppProvider>
    </Grid>
  );
}

export default App;
