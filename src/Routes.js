import React from "react";
import SignUp from "./components/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import ProductsContextProvider from "./context/ProductsContext";
import Edit from "./components/EditModal/Edit";
import EditModal from "./components/EditModal/EditModal";
import Details from "./components/Details/Details";
import ResponsiveList from "./components/ProductsUser/ResponsiveList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/OrderForm/Checkout";
import Favourites from "./components/Favourites/Favourites";
import Footer from "./components/Footer/Footer";
import UsersOrder from "./components/UsersOrder/UsersOrder";

const Routes = () => {
  return (
    <ProductsContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path="/profile" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <PrivateRoute exact path="/edit/:id" component={Edit} />
            <PrivateRoute exact path="/modal" component={EditModal} />
            <PrivateRoute exact path="/details/:id" component={Details} />
            <Route exact path="/store" component={ResponsiveList} />
            <Route exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/payment" component={Checkout} />
            <PrivateRoute exact path="/favourites" component={Favourites} />
            <PrivateRoute exact path="/my-orders" component={UsersOrder} />
          </Switch>
          <Footer />
        </BrowserRouter>
       </AuthProvider>
     </ProductsContextProvider>
  );
};

export default Routes;