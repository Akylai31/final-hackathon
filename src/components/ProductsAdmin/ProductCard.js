import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { productsContext } from "../../context/ProductsContext";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({ item, history }) {
  const classes = useStyles();
  const { deleteProduct, editProduct, showDetails, detailsData } = useContext(
    productsContext
  );
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  // console.log(detailsData);
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
        <Link to={`/edit/${item.id}`}>
          <IconButton onClick={() => editProduct(item.id)}>
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => deleteProduct(item.id, history)}>
          <DeleteForeverIcon />
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