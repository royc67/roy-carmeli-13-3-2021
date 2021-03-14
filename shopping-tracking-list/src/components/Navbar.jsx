import React, { useState } from "react";
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
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [state, dispatch] = useApp();

  const handleChange = (event, newValue) => {
    console.log(state);
    setTab(newValue);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Toolbar>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="secondary"
          // textColor="primary"
          // variant="standard"
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
          value={state.currency}
          onChange={(event, newValue) => {
            dispatch({ type: "changeCurrency", payload: { newValue } });
          }}
          showLabels
          className={classes.root}
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
