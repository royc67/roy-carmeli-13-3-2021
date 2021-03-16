import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, InputBase } from "@material-ui/core";
import useApp from "../Hooks/useApp";
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
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "100vmin",
  },
  dark: {
    backgroundColor: "#eaeaea",
  },

  toolbar: {
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
  const state = useApp()[0];
  const [itemsSummary, setItemsSummary] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const stores = [];
    const storeData = (item) => ({
      name: item.store,
      quantity: 1,
      summary: parseInt(item.price),
    });

    state.deliveryItems.forEach((item) => {
      const currentStore = stores.find((store) => store.name === item.store);
      if (currentStore) {
        currentStore.quantity += 1;
        currentStore.summary += parseInt(item.price);
      } else stores.push(storeData(item));
    });

    setItemsSummary(stores);
  }, [state.deliveryItems]);

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          className={classes.toolbar}
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
              onChange={(e) => setSearchKeyword(e.target.value)}
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
              {itemsSummary
                .filter((store) => store.name.includes(searchKeyword))
                .map((row, i) => (
                  <TableRow
                    key={row.name}
                    className={classNames({ [classes.dark]: i & 2 })}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{`X${row.quantity}`}</TableCell>
                    <TableCell align="right">
                      {state.currency === "USD"
                        ? `${row.summary.toFixed(2)}$`
                        : `${(row.summary * state.converter).toFixed(2)}₪`}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
