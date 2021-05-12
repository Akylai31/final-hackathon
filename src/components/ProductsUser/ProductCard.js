import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { productsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
  },
  media: {
    height: 140,
    width: 250,
    margin: "0 auto",
  },
});

export default function ProductCard({ item, history }) {
  const classes = useStyles();
  const { showDetails, addProductToCart, checkProductInCart } = useContext(
    productsContext
  );

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.img1} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $ {item.price} 
            <br />
            {item.color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={() => addProductToCart(item)}
          color={checkProductInCart(item.id) ? "secondary" : ""}
        >
          <LocalMallIcon />
        </IconButton>

        <Link to={`/details/${item.id}`}>
          <IconButton onClick={() => showDetails(item.id)}>
            <MoreHorizIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}