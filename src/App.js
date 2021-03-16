import Navbar from "./components/Navbar.jsx";
import PurchaseByItem from "./pages/PurchaseByItem";
import PurchaseByStores from "./pages/PurchaseByStores";
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useApp from "./Hooks/useApp.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [state, dispatch] = useApp();

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "error", payload: [false, ""] });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Router>
          <Redirect to="/purchase/byItem/delivery" />
          <Navbar />
          <Switch>
            <Route path="/purchase/byItem" component={PurchaseByItem} />
            <Route path="/purchase/byStores" component={PurchaseByStores} />
          </Switch>
        </Router>
        <Snackbar
          open={state.error[0]}
          autoHideDuration={6000}
          onClose={handleErrorClose}
        >
          <Alert onClose={handleErrorClose} severity="error">
            {state.error[1]}
          </Alert>
        </Snackbar>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
