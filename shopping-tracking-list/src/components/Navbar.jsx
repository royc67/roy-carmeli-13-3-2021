import React, { useEffect, useState, useRef } from "react";
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
    minWidth: "100px",
    maxWidth: "120px",
  },
  currencyTab: {
    minWidth: "50%",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [currencyTab, setCurrencyTab] = useState(0);
  const [state, dispatch] = useApp();

  const currencyInterval = useRef(0);

  // update currency rate every 10 sec
  useEffect(() => {
    const fetchCurrencyRate = () => {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((res) => res.json())
        .then((json) =>
          dispatch({
            type: "updateConverter",
            payload: { newValue: json.rates.ILS },
          })
        );
    };

    fetchCurrencyRate();
    currencyInterval.current = setInterval(() => {
      fetchCurrencyRate();
    }, 10000);

    return () => {
      clearInterval(currencyInterval.current);
    };
  }, [dispatch]);

  const handleRoute = (event, newValue) => {
    setTab(newValue);
  };

  const handleSwitch = (event, newValue) => {
    setCurrencyTab(newValue);
  };

  const switchCurrency = (e) => {
    const newValue = e.target.innerText;
    if (state.currency !== newValue)
      dispatch({ type: "switchCurrency", payload: { newValue } });
  };

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Tabs
          value={tab}
          onChange={handleRoute}
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
        <Tabs
          className={classes.currencySwitch}
          value={currencyTab}
          onChange={handleSwitch}
          indicatorColor="secondary"
          aria-label="currency-switch"
        >
          <Tab
            className={classes.currencyTab}
            value="USD"
            label="USD"
            {...a11yProps(0)}
            onClick={switchCurrency}
            wrapped
          />
          <Tab
            className={classes.currencyTab}
            value="ILS"
            label="ILS"
            {...a11yProps(1)}
            onClick={switchCurrency}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
