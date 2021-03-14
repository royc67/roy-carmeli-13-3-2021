import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, Button, InputBase } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import {
  TableHead,
  Table,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
} from "@material-ui/core";

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
}));

export default function PurchaseByStores() {
  const classes = useStyles();

  function archive(item) {
    //   archive item
  }

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.dark}>
                <TableCell>Store</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={row.name} className={i % 2 && classes.dark}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.store}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
