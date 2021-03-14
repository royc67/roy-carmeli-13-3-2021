import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Toolbar>
        <Tabs
          value={value}
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
            to="/purchase/byItem"
          />
          <Tab
            label="Purchase by store"
            {...a11yProps(1)}
            component={Link}
            to="/purchase/byStore"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
