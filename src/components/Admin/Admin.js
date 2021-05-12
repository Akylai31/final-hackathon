import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddProduct from "../AddProduct/AddProduct";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShopIcon from "@material-ui/icons/Shop";
import Order from "../Order/Order";
import ProductList from "../ProductsAdmin/ProductList";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "../ProductsAdmin/Sidebar";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Admin(props) {
  const { window, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function routesAdmin(comp) {
    if (comp === "add") {
      return <AddProduct history={history} />;
    } else if (comp === "list") {
      return <ProductList history={history} />;
    } else if (comp === "order") {
      return <Order history={history} />;
    }
  }
  function filterShow(comp) {
    if (comp === "list") {
      return <Sidebar />;
    }
  }
  const [comp, setComp] = useState("add");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ marginLeft: 20 }}>
        <br />
        <Link to="/">
          <Button
            variant="contained"
            style={{ backgroundColor: "#d6c0b1", color: "black" }}
            className={classes.button}
          >
            <KeyboardReturnIcon />
            Home page
          </Button>
        </Link>{" "}
        <br /> <br />
        <Button
          onClick={() => setComp("add")}
          variant="contained"
          style={{
            backgroundColor: "#d6c0b1",
            color: "black",
            textDecoration: "none",
          }}
          className={classes.button}
        >
          <AddCircleIcon />
          Add product
        </Button>
        <br />
        <br />
        <Button
          onClick={() => setComp("list")}
          variant="contained"
          style={{ backgroundColor: "#d6c0b1", color: "black" }}
          className={classes.button}
        >
          <ShopIcon />
          Products
        </Button>
        <br />
        <br />
        <Button
          onClick={() => {
            setComp("order");
          }}
          variant="contained"
          style={{ backgroundColor: "#d6c0b1", color: "black" }}
          className={classes.button}
        >
          <EventAvailableIcon />
          Order
        </Button>
        {filterShow(comp)}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#f1ebdf", color: "black" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}> {routesAdmin(comp)}</main>
    </div>
  );
}

export default Admin;