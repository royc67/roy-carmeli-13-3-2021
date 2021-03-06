import { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
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
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import AddItem from "./AddItem";
import useApp from "../Hooks/useApp";

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
  tableContainer: {
    minWidth: "450px",
  },
  dark: {
    backgroundColor: "#eaeaea",
  },
  totalPrice: {
    marginTop: theme.spacing(2),
  },
}));

export default function DeliveryItems() {
  const classes = useStyles();
  const [state, dispatch] = useApp();
  const [openModal, setOpenModal] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [total, setTotal] = useState(calcTotal());

  function calcTotal() {
    let totalTemp = 0;
    state.deliveryItems
      .filter((item) => item.itemName.includes(searchKeyword))
      .forEach((item) => (totalTemp += item.price));
    return totalTemp;
  }

  useEffect(() => {
    setTotal(calcTotal());
  }, [state.deliveryItems.length, searchKeyword.length]);

  function archiveItem(itemID) {
    dispatch({ type: "archiveItem", payload: { itemID } });
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
          className={classes.toolBar}
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
              placeholder="Search???"
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
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            add Item
          </Button>
        </Grid>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
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
              {state.deliveryItems
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
                        : `${(row.price * state.converter).toFixed(2)}???`}
                    </TableCell>
                    <TableCell align="right">{row.dest}</TableCell>
                    <TableCell align="right">
                      <Button
                        label="archive"
                        color="primary"
                        onClick={() => archiveItem(row.id)}
                      >
                        Archive
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
            : `${(total * state.converter).toFixed(2)}???`}
        </Grid>
      </Grid>
      {openModal && <AddItem open={openModal} setOpen={setOpenModal} />}
    </Grid>
  );
}
