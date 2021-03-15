import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tab,
  Tabs,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import Currency from "react-currency-icons";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { Link } from "react-router-dom";
import useApp from "../Hooks/useApp";

function a11yProps(index) {
  return {
    id: `standard-tab-${index}`,
    "aria-controls": `standard-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  currencySwitch: {
    backgroundColor: "#a7b4ff",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [state, dispatch] = useApp();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  let currencyInterval;

  useEffect(() => {
    currencyInterval = setInterval(() => {
      console.log(state);
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((res) => res.json())
        .then((json) =>
          dispatch({
            type: "updateConverter",
            payload: { newValue: json.rates.ILS },
          })
        );
    }, 10000);

    return () => {
      clearInterval(currencyInterval);
    };
  }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="tabs"
        >
          <Tab
            label="Purchase by item"
            {...a11yProps(0)}
            component={Link}
            to="/purchase/byItem/delivery"
          />
          <Tab
            label="Purchase by stores"
            {...a11yProps(1)}
            component={Link}
            to="/purchase/byStores"
          />
        </Tabs>
        <BottomNavigation
          className={classes.currencySwitch}
          value={state.currency}
          onChange={(event, newValue) => {
            dispatch({ type: "switchCurrency", payload: { newValue } });
          }}
          showLabels
        >
          <BottomNavigationAction
            value="USD"
            label="USD"
            icon={<Currency code="USD" size="small" />}
          />
          <BottomNavigationAction
            value="ILS"
            label="ILS"
            icon={<Currency code="ILS" size="small" />}
          />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}
