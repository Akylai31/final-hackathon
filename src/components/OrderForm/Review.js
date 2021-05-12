import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { productsContext } from "../../context/ProductsContext";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/AuthContext";
import Invoice from "../Invoice/Invoice";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const { addOrder } = useContext(productsContext);
  const { currentUser } = useContext(AuthContext);
  let persons = JSON.parse(localStorage.getItem("persons"));
  let cards = JSON.parse(localStorage.getItem("cards"));
  let testCart = JSON.parse(localStorage.getItem("cart"));
  // let [newOrder, setNewOrder] = useState({});
  function saveOrder() {
    let newOrder = {
      firstName: persons.firstName,
      lastName: persons.lastName,
      address1: persons.address1,
      address2: persons.address2,
      city: persons.city,
      state: persons.state,
      zip: persons.zip,
      country: persons.country,
      cardName: cards.name,
      cardNumber: cards.number,
      cardExpiry: cards.expiry,
      cardCvc: cards.cvc,
      orders: testCart.products,
      date: new Date().toLocaleString(),
      email: currentUser.email,
      totalPrice: testCart.totalPrice,
    };
    // setNewOrder(newOrder);
    addOrder(newOrder);
    localStorage.clear();
  }
  console.log(testCart);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {testCart?.products ? (
          <div>
            {testCart.products.map((elem) => (
              <ListItem className={classes.listItem} key={elem.item.title}>
                <ListItemText
                  primary={elem.item.title}
                  secondary={elem.item.price}
                />
                <Typography variant="body2">
                  SubPrice: {elem.subPrice}
                </Typography>
              </ListItem>
            ))}
          </div>
        ) : (
          <h1>loading</h1>
        )}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {testCart.totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shopping
          </Typography>
          <Typography gutterBottom>
            FirstName: {persons.firstName}
            <br /> LastName: {persons.lastName}
          </Typography>
          <Typography gutterBottom>
            {" "}
            Addresses:
            {persons.address1},{persons.address2}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment key={cards.name}>
              <Grid item xs={6}>
                <Typography gutterBottom>{cards.name}</Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography gutterBottom>{cards.number}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cards.expiry}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cards.cvc}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>

        <Button
          onClick={() => saveOrder()}
          variant="contained"
          color="secondary"
        >
          save
        </Button>
      </Grid>
    </React.Fragment>
  );
}