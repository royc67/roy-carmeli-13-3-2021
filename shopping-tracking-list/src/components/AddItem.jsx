import { makeStyles } from "@material-ui/core/styles";
import {
  Backdrop,
  Fade,
  Modal,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import { useEffect, useState } from "react";
import useApp from "../Hooks/useApp";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "50vmin",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  field: {
    width: "40%",
    margin: theme.spacing(1),
  },
}));

const today = () => new Date().toISOString().split("T")[0].split("-").join("-");

const EMPTY_FORM = () => ({ itemName: "", store: "", price: 0, dest: today() });

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

  const handleAutoComplete = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.innerText });
  };

  const updateValues = (prop) => (event) => {
    //   input validation and limit
    switch (prop) {
      case "price":
        if (isNaN(event.target.value)) return;
        break;
      case "date":
        break;
      default:
        if (event.target.value.length > 100) return;
        break;
    }
    if (prop === "price" && isNaN(event.target.value)) return;
    setValues({ ...values, [prop]: event.target.value });
  };

  function submit() {
    dispatch({ type: "addItem", payload: { item: values } });
    setOpen(false);
  }

  // auto Complete
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItemOptions(json));
  }, []);

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
        <div className={classes.paper}>
          <h2 id="add-item-title">Add Item</h2>
          <div className={classes.row}>
            <FormControl required className={classes.field}>
              <Autocomplete
                className={classes.margin}
                id="item-name-input"
                freeSolo
                onInputChange={handleAutoComplete("itemName")}
                options={itemOptions.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="item-name-input"
                    value={values.itemName}
                    onChange={updateValues("itemName")}
                    label="item name"
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            </FormControl>
            <FormControl required className={classes.field}>
              <Autocomplete
                className={classes.margin}
                id="store-name-input"
                options={STORE_OPTIONS}
                onInputChange={handleAutoComplete("store")}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    id="store-input"
                    {...params}
                    value={values.store}
                    onChange={updateValues("store")}
                    label="store"
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            </FormControl>
          </div>
          <div className={classes.row}>
            <FormControl className={classes.field} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={values.price}
                onChange={updateValues("price")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <FormControl required className={classes.field}>
              <TextField
                id="delivery-estimate-input"
                label="delivery-estimate"
                type="date"
                value={values.dest}
                onChange={updateValues("dest")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={submit}
          >
            add
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}
