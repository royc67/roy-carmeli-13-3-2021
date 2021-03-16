import Navbar from "./components/Navbar.jsx";
import { AppProvider } from "./contexts/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import PurchaseByItem from "./pages/PurchaseByItem";
import PurchaseByStores from "./pages/PurchaseByStores";
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <AppProvider>
        <Router>
          <Redirect to="/purchase/byItem/delivery" />
          <Navbar />
          <Switch>
            <Route path="/purchase/byItem" component={PurchaseByItem} />
            <Route path="/purchase/byStores" component={PurchaseByStores} />
          </Switch>
        </Router>
      </AppProvider>
    </Grid>
  );
}

export default App;
