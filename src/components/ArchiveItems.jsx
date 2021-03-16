import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import useApp from "../Hooks/useApp";

import {
  TableHead,
  Table,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Button,
  Grid,
  InputBase,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
  dark: {
    backgroundColor: "#eaeaea",
  },
  totalPrice: {
    marginTop: theme.spacing(2),
  },
}));

export default function ArchiveItems() {
  const classes = useStyles();
  const [state, dispatch] = useApp();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [total, setTotal] = useState(calcTotal());

  function calcTotal() {
    let totalTemp = 0;
    state.archiveItems
      .filter((item) => item.itemName.includes(searchKeyword))
      .forEach((item) => (totalTemp += item.price));
    return totalTemp;
  }

  useEffect(() => {
    setTotal(calcTotal());
  }, [state.archiveItems.length, searchKeyword.length]);

  function reActivateItem(itemID) {
    dispatch({ type: "reactiveItem", payload: { itemID } });
    setTotal(calcTotal());
  }

  return (
    <Grid container className={classes.container}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          container
          className={classes.toolBar}
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
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
          </div>
        </Grid>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="items-list">
            <TableHead>
              <TableRow className={classes.dark}>
                <TableCell style={{ minWidth: 600 }}>Item name</TableCell>
                <TableCell style={{ minWidth: 100 }} align="right">
                  Store
                </TableCell>
                <TableCell style={{ minWidth: 100 }} align="right">
                  Price
                </TableCell>
                <TableCell style={{ minWidth: 100 }} align="right">
                  Delivery estimate
                </TableCell>
                <TableCell style={{ minWidth: 100 }} align="right">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.archiveItems
                .filter((row) => row.itemName.includes(searchKeyword))
                .map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.itemName}
                    </TableCell>
                    <TableCell align="right">{row.store}</TableCell>
                    <TableCell align="right">
                      {state.currency === "USD"
                        ? `${row.price.toFixed(2)}$`
                        : `${(row.price * state.converter).toFixed(2)}₪`}
                    </TableCell>
                    <TableCell align="right">{row.dest}</TableCell>
                    <TableCell align="right">
                      <Button
                        label="remove"
                        color="primary"
                        onClick={() => reActivateItem(row.id)}
                      >
                        reactive
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item xs={4} className={classes.totalPrice}>
          Total:{" "}
          {state.currency === "USD"
            ? `${total.toFixed(2)}$`
            : `${(total * state.converter).toFixed(2)}₪`}
        </Grid>
      </Grid>
    </Grid>
  );
}
