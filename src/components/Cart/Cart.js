import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import { calcTotalPrice } from "../../helpers/calcPrice";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteFromCart } = useContext(
    productsContext
  );

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      <h1>Shopping cart</h1>
      {cart?.products ? (
        <div>
          {" "}
          {cart.products.map((elem) => (
            <div className="cart__items">
              <div>
                <img alt="" className="img_product" src={elem.item.img1} />
              </div>
              <div className="item__title">
                {" "}
                <div className="item__name">Name: {elem.item.title}</div>
                <div className="item__price">Price: {elem.item.price}</div>
              </div>
              <div className="item__count__div">
                <div className="item__count__span">Count: </div>
                <input
                  className="item__count"
                  onChange={(e) =>
                    changeProductCount(e.target.value, elem.item.id)
                  }
                  type="number"
                  value={elem.count}
                />
              </div>
              <div className="item__subprice">
                <div className="price_subprice">
                  {" "}
                  <div className="item__subprice__div">SubPrice: </div>
                  <div>$ {elem.subPrice}</div>
                </div>
                <div>
                  <button
                    className="delete__from__cart"
                    onClick={() => deleteFromCart(elem.item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h4>
            Total: ${" "} {calcTotalPrice(cart.products)} 
            <Link to="/payment">
              <button className="buy-btn">Buy</button>
            </Link>
          </h4>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
export default Cart;