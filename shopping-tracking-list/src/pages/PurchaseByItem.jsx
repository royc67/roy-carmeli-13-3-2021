import React from "react";
import PageNavbar from "../components/PageNavbar.jsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, Button, InputBase, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchiveItems from "../components/ArchiveItems.jsx";
import DeliveryItems from "../components/DeliveryItems.jsx";

function createItem(name, store, price, dest) {
  return { name, store, price, dest };
}

const rows = [
  createItem("Frozen yoghurt", "159", "6.0", "24"),
  createItem("Ice cream sandwich", 237, 9.0, 37),
  createItem("Eclair", 262, 16.0, 24),
  createItem("Cupcake", 305, 3.7, 67),
  createItem("Gingerbread", 356, 16.0, 49),
  createItem("Frozen yoghurt", "159", "6.0", "24"),
  createItem("Ice cream sandwich", 237, 9.0, 37),
  createItem("Eclair", 262, 16.0, 24),
  createItem("Cupcake", 305, 3.7, 67),
  createItem("Ice cream sandwich", 237, 9.0, 37),
  createItem("Eclair", 262, 16.0, 24),
  createItem("Cupcake", 305, 3.7, 67),
  createItem("Ice cream sandwich", 237, 9.0, 37),
  createItem("Eclair", 262, 16.0, 24),
  createItem("Cupcake", 305, 3.7, 67),
  createItem("Ice cream sandwich", 237, 9.0, 37),
];
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "100vmin",
  },
  dark: {
    backgroundColor: "#eaeaea",
  },
  button: {},
  container: {},
  toolbar: {
    direction: "row",
    justifyContent: "space-beetween",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  table: {
    minWidth: "100vmin",
  },
  dark: {
    backgroundColor: "#eaeaea",
  },
}));

export default function PurchaseByItem() {
  const classes = useStyles();

  function archive(item) {
    //   archive item
  }

  return (
    <Grid container>
      <Router>
        <PageNavbar />
        <Switch>
          <Route path="/purchase/byItem/delivery" component={DeliveryItems} />
          <Route path="/purchase/byItem/archive" component={ArchiveItems} />
        </Switch>
      </Router>
    </Grid>
  );
}
