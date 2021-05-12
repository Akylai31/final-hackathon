import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductsContext";

const UsersOrder = () => {
  const { getOrders, ordersData } = useContext(productsContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders">
      {ordersData ? (
        <div>
          {" "}
          <h1>Your orders</h1>{" "}
          {ordersData.map((item) => {
            if (item.email === currentUser.email) {
              return (
                <div
                  style={{ border: "1px solid black", margin: 20, padding: 20 }}
                >
                  {" "}
                  <div>Date: {item.date}</div>
                  <div>E-Mail: {item.email}</div>
                  <div>FirstName : {item.firstName}</div>
                  <div>LastName : {item.lastName}</div>
                  <div>Address1 : {item.address1}</div>
                  <div>Address2 : {item.address2}</div>
                  <div>Country : {item.country}</div>
                  <div>City : {item.city}</div>
                  <div>State : {item.state}</div>
                  <div>Zip : {item.zip}</div>
                  <div>CardName : {item.cardName}</div>
                  <div>CardNumber : {item.cardNumber}</div>
                  <div>CardCvc : {item.cardCvc}</div>
                  <div>CardExpiry :{item.cardExpiry}</div>
                  <div>
                    Orders :{" "}
                    {item.orders.map((elem) => (
                      <div>
                        {" "}
                        <div>Name : {elem.item.title}</div>
                        <div>Price : {elem.item.price}</div>
                        <div>SubPrice : {elem.subPrice}</div>
                      </div>
                    ))}
                  </div>
                  <div>Total: {item.totalPrice}</div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default UsersOrder;