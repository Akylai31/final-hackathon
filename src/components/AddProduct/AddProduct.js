import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { productsContext } from "../../context/ProductsContext";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(productsContext);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.9),
        width: "50ch",
      },
    },
  }));
  const classes = useStyles();

  const [product, setProduct] = useState({
    title: "",
    type: "",
    category: "",
    price: "",
    color: "",
    pageLayout: "",
    desc1: "",
    desc2: "",
    waterproof: "",
    recyclable: "",
    friction: "",
    carbon: "",
    delivery: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    comments: [],
    likes: [],
    favourites: [],
  });
  const handleValues = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  };
  const handleClick = () => {
    if (
      product.title === "" ||
      product.type === "" ||
      product.category === "" ||
      product.price === "" ||
      product.color === "" ||
      product.pageLayout === "" ||
      product.desc1 === "" ||
      product.desc2 === "" ||
      product.waterproof === "" ||
      product.recyclable === "" ||
      product.friction === "" ||
      product.carbon === "" ||
      product.delivery === "" ||
      product.img1 === "" ||
      product.img2 === "" ||
      product.img3 === "" ||
      product.img4 === "" ||
      product.img5 === "" ||
      product.img6 === ""
    ) {
      setShowError(true);
      return;
    }
    setProduct({
        title: "",
        type: "",
        category: "",
        price: "",
        color: "",
        pageLayout: "",
        desc1: "",
        desc2: "",
        waterproof: "",
        recyclable: "",
        friction: "",
        carbon: "",
        delivery: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        img6: ""
    });
    addProduct(product, history);
    setShowAlert(true);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        name="title"
        label="Title"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.title}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="type"
        label="Type"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.type}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="category"
        label="Category"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.category}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="price"
        label="Price"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.price}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="color"
        label="Color"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.color}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="pageLayout"
        label="PageLayout"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.pageLayout}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="waterproof"
        label="Waterproof"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.waterproof}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="recyclable"
        label="Recyclable"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.recyclable}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="friction"
        label="Friction"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.friction}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="carbon"
        label="Carbon"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.carbon}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="delivery"
        label="Delivery"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.delivery}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="desc1"
        label="Description1"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.desc1}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="desc2"
        label="Description2"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.desc2}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img1"
        label="img1"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img1}
      />{" "}
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img2"
        label="img2"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img2}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img3"
        label="img3"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img3}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img4"
        label="img4"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img4}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img5"
        label="img5"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img5}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img6"
        label="img6"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img6}
      />
      {showAlert ? (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          You have added a new product!
        </Alert>
      ) : (
        ""
      )}
      {showError ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Fill in all the fields!
        </Alert>
      ) : (
        ""
      )}
      <Button
        variant="contained"
        style={{ backgroundColor: "#d6c0b1", color: "black" }}
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClick}
      >
        Add new product
      </Button>
    </form>
  );
};

export default AddProduct;