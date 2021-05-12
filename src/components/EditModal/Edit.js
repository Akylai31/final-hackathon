import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { productsContext } from "../../context/ProductsContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "60vw",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Edit() {
  const {
    productToEdit,
    editProduct: fetchProduct,
    saveEditedProduct,
  } = useContext(productsContext);
  
  const [editProduct, setEditProduct] = useState(productToEdit);
  const [check, setCheck] = useState(false);
  const classes = useStyles();
  const params = useParams();
  const [openSpinner, setOpenSpinner] = React.useState(true);

  useEffect(() => {
    setEditProduct(productToEdit);
    if (productToEdit) {
      setCheck(true);
    }
  }, [productToEdit]);
  const handleCloseSpinner = () => {
    setOpenSpinner(false);
  };

  useEffect(() => {
    fetchProduct(params.id);
  }, []);

  const handleValues = (e) => {
    let editedProduct = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };
    setEditProduct(editedProduct);
  };

  return (
    <>
      {!check ? (
        <div>
          <Backdrop
            className={classes.backdrop}
            open={openSpinner}
            onClick={handleCloseSpinner}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-flexible"
            name="title"
            label="Title"
            variant="outlined"
            value={editProduct.title}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="type"
            label="Type"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.type}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="category"
            label="Category"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.category}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="price"
            label="Price"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.price}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="color"
            label="Color"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.color}
            onChange={handleValues}
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
            value={editProduct.pageLayout}
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
            value={editProduct.waterproof}
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
            value={editProduct.recyclable}
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
            value={editProduct.friction}
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
            value={editProduct.carbon}
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
            value={editProduct.delivery}
        />
        <br />
          <TextField
            id="outlined-multiline-flexible"
            name="desc1"
            label="Description1"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.desc1}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="desc2"
            label="Description2"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.desc2}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img1"
            label="Img1"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img1}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img2"
            label="img2"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img2}
            onChange={handleValues}
          />

          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img3"
            label="img3"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img3}
            onChange={handleValues}
          />
          <br />

          <TextField
            id="outlined-multiline-flexible"
            name="img4"
            label="img4"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img4}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img5"
            label="img5"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img5}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img6"
            label="img6"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img6}
            onChange={handleValues}
          />
          <br />

          <Link to="/modal">
            {" "}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={saveEditedProduct(editProduct)}
            >
              Save
            </Button>
          </Link>
        </form>
      )}
    </>
  );
}