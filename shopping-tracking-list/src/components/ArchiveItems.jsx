import React from "react";
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
// import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "100vmin",
  },
  dark: {
    backgroundColor: "#eaeaea",
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

export default function ArchiveItems() {
  const classes = useStyles();
  const [state, dispatch] = useApp();

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
                <TableCell>Item name</TableCell>
                <TableCell align="right">Store</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Delivery estimate</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.archiveItems.map((row, i) => (
                <TableRow key={row.id} className={i % 2 && classes.dark}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.store}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.dest}</TableCell>
                  <TableCell align="right">
                    <Button
                      label="remove"
                      color="primary"
                      onClick={() => archive(row)}
                    >
                      reactive
                    </Button>
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
