import React, { useContext, useEffect } from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Badge from "@material-ui/core/Badge";
import { productsContext } from "../../context/ProductsContext";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import HistoryIcon from "@material-ui/icons/History";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

library.add(fab, faShoppingCart)
const Header = () => {
  const { cartLength, productsData, getProducts } = useContext(productsContext);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);

  useEffect(() => {
    getProducts(history);
  }, []);

  return (
    <header >
      <div className="container navbar">
        <Link  to="/">
          <div className="header_logo">
            <img alt="product_logo_img" src="https://images.milledcdn.com/2020-09-23/2rMeNpyQ-HbUXf6v/nL9uCf1sGSHo.png"/>
          </div>
        </Link>
        <div className="navbar1">
          <ul className="navs1">
            <Link style={{color: "black"}} to="/store">
              <li>Shop</li>
            </Link>
              <li>Discover</li>
              <li>Custom</li>
              <li>Bookmark</li>
              <li>About</li>
          </ul>
        </div>

        <div className="navbar_right">
          <span>
          {/* <ul className="nav_icons"> */}
            <Link className="icons" style={{color: "black"}} to="/cart">
              <Badge badgeContent={cartLength} color="secondary">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Badge>
            </Link>
            <Link className="icons" style={{color: "black"}} to="/favourites">
              <IconButton className="header__items">
                <BookmarkBorderIcon style={{color: "black"}}/>{" "}
              </IconButton>
            </Link>
            <Link className="icons" style={{color: "black"}} to="/profile">
              {currentUser ? (
                <span>
                  {" "}
                  <IconButton className="btn-profile"
                  style={{ height: 30, fontSize: 20 }}>
                    <AccountCircleOutlinedIcon style={{color: "black"}}/>{" "}
                  </IconButton>
                  <span style={{ marginLeft: 10, fontSize: 18 }}>
                    {" "}
                    {currentUser.email}
                  </span>
                </span>
              ) : (
                  <IconButton className="btn-profile"
                  style={{ height: 30, fontSize: 20 }}>
                    <AccountCircleIcon style={{color: "black"}}/>{" "}
                  </IconButton>
              )}
            </Link>
            </span>
          {/* </ul> */}
        </div>
      </div>
    </header>
  );
};

export default Header;


  // "start": "concurrently \"react-scripts start\" \"json-server -w db.json -p 8000\"",