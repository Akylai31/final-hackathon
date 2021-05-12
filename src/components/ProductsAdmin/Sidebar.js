import React, { useContext, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { productsContext } from "../../context/ProductsContext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: "black",
  },
  root: {
    width: 176,
  },
}));

const Sidebar = () => {
  const history = useHistory();
  const { getProducts } = useContext(productsContext);
  const [memory, setMemory] = useState(getMemory());

  function getMemory(){
    const search = new URLSearchParams(history.location.search);
    return search.get("category");
  }
  const handleChangeMemory = (e) => {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setMemory(e.target.value)
  };
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showChangePrice = () => {
    const search = new URLSearchParams(history.location.search);
    history.push(
      `${history.location.pathname}?price_gte=${value[0]}&price_lte=${value[1]}`
    );

    getProducts(history);
    search.toString();
  };

  const [searchValue, setSearchValue] = useState(getSearchValue());

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getProducts(history);
  };

  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }

  return (
    <Grid item m={3}>
      <br />
      <Typography style={{ fontSize: 20 }}>Filters</Typography>
      <input
        // style={{ width: 300 }}
        onChange={handleValue}
        value={searchValue}
      />
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Price from... ...to
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="price"
          aria-labelledby="range-slider"
          min={0}
          max={400}
          step={10}
        />
        <Button onClick={showChangePrice} variant="outlined" color="primary">
          Show
        </Button>
      </div>
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort</FormLabel>
        <RadioGroup onChange={handleChangeMemory} value={memory} aria-label="category" name="category">
          <FormControlLabel value="all" control={<Radio />} label="All Products" />
          <FormControlLabel value="notebooks" control={<Radio />} label="Notebooks" />
          <FormControlLabel
            value="notepads"
            control={<Radio />}
            label="Notepads"
          />
          <FormControlLabel
            value="pocket_journals"
            control={<Radio />}
            label="Pocket Journals"
          />
          <FormControlLabel
            value="journals"
            control={<Radio />}
            label="Journals"
          />
          <FormControlLabel
            value="bundles"
            control={<Radio />}
            label="Bundles"
          />
          <FormControlLabel
            value="planners"
            control={<Radio />}
            label="Planners"
          />
          <FormControlLabel
            value="action_pads"
            control={<Radio />}
            label="Action Pads"
          />
          <FormControlLabel
            value="pencils"
            control={<Radio />}
            label="Pencils"
          />
          <FormControlLabel
            value="sketchpads"
            control={<Radio />}
            label="Sketchpads"
          />
          <FormControlLabel
            value="gift_cards"
            control={<Radio />}
            label="Gift Cards"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default Sidebar;