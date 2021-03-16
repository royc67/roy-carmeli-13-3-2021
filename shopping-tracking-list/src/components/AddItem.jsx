import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Backdrop,
  Fade,
  Modal,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import useApp from "../Hooks/useApp";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "50vmin",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minHeight: "300px",
    minWidth: "280px",
  },
  padding: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  dateInput: {
    maxWidth: "100%",
  },
}));

const today = () => new Date().toISOString().split("T")[0].split("-").join("-");

const EMPTY_FORM = () => ({
  itemName: "",
  store: "",
  price: "",
  dest: today(),
});

const STORE_OPTIONS = [
  "ebay",
  "amazon",
  "aliexpress",
  "boom",
  "shein",
  "asos",
  "American Eagle",
  "Boohoo",
  "Lululemon",
  "forevertwentyone",
  "Anthropologie",
];

const FAKE_STORE_API_ERROR =
  "Fake store API is not accessible, trying to re-connect...";

export default function AddItem({ open, setOpen }) {
  const classes = useStyles();
  const dispatch = useApp()[1];
  const [itemOptions, setItemOptions] = useState([]);
  const [values, setValues] = useState(EMPTY_FORM());

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    setValues(EMPTY_FORM());
  }, [open]);

  const handleAutoComplete = (prop) => (e) => {
    if (e.keyCode === 13) {
      setValues({ ...values, [prop]: e.target.defaultValue });
    } else {
      setValues({ ...values, [prop]: e.target.innerText });
    }
  };

  const updateValues = (prop) => (event) => {
    let newValue = event.target.value;

    if (prop === "price" && isNaN(newValue)) {
      return;
    }

    setValues({ ...values, [prop]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.store || !values.itemName) {
      const itemName = document.querySelector("#item-name-auto-complete").value;
      const store = document.querySelector("#store-name-auto-complete").value;

      dispatch({
        type: "addItem",
        payload: {
          item: { ...values, price: parseFloat(values.price), store, itemName },
        },
      });
      setOpen(false);
    } else {
      dispatch({
        type: "addItem",
        payload: { item: { ...values, price: parseFloat(values.price) } },
      });
      setOpen(false);
    }
  };

  // auto Complete
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItemOptions(json))
      .catch((err) =>
        dispatch({ type: "error", payload: [true, FAKE_STORE_API_ERROR] })
      );
  }, [dispatch]);

  return (
    <Modal
      aria-labelledby="add-item-modal-title"
      aria-describedby="add-new-item"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <form onSubmit={handleSubmit}>
          <Grid container justify="center" className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Add Item
            </Typography>
            <Grid item xs={12}>
              <Autocomplete
                className={classes.margin}
                id="item-name-auto-complete"
                freeSolo
                onInputChange={handleAutoComplete("itemName")}
                options={itemOptions.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    id="item-name-input"
                    type="text"
                    {...params}
                    value={values.itemName}
                    onChange={updateValues("itemName")}
                    label="item name"
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                className={classes.margin}
                id="store-name-auto-complete"
                options={STORE_OPTIONS}
                onInputChange={handleAutoComplete("store")}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    id="store-input"
                    type="text"
                    {...params}
                    value={values.store}
                    onChange={updateValues("store")}
                    label="store"
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={12} sm={4}>
                <TextField
                  className={classes.margin}
                  type="text"
                  label="amount"
                  id="amount-input"
                  value={values.price}
                  onChange={updateValues("price")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  className={classNames(classes.margin, classes.dateInput)}
                  id="delivery-estimate-input"
                  label="delivery estimate"
                  type="date"
                  value={values.dest}
                  onChange={updateValues("dest")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fade>
    </Modal>
  );
}
