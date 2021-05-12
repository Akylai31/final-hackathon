import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import { Paper } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductsUser/ProductCard";

const Favourites = ({ history }) => {

  const { productsData, getProducts } = useContext(productsContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getProducts(history);
  }, []);

  return (
    <Paper>
      {productsData ? (
        <>
          {productsData.map((item) => (
            <>
              {item.favourites.map((elem) => {
                if (elem.email === currentUser.email) {
                  return (
                    <ProductCard history={history} item={item} key={item.id} />
                  );
                }
              })}
            </>
          ))}
        </>
      ) : (
        <h1>loading</h1>
      )}
    </Paper>
  );
};

export default Favourites;