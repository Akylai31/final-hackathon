import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Grid, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { productsContext } from "../../context/ProductsContext";

const ProductList = ({ history }) => {
  const { getProducts, productsData, paginationPages } = useContext(productsContext);
  const [page, setPage] = useState(getPage());

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }

  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
  };

  useEffect(() => {
    getProducts(history);
  }, []);

  return (
    <>
      
        <Grid container spacing={3} style={{ margin: 0 }}>
          {productsData.map((item) => (
            <ProductCard history={history} item={item} key={item.id} />
          ))}
        </Grid>
        <Pagination
          onChange={handlePage}
          count={paginationPages}
          color="primary"
          defaultPage={+page}
        />{" "}
     
    </>
  );
};

export default ProductList;