import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductsContext";
import ProductCard from "./ProductCard";
import { Grid, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";

const ProductList = (props) => {
  const { getProducts, productsData, paginationPages } = useContext(
    productsContext
  );
  const history = useHistory();
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
    getProducts(props.history);
  }, []);

  return (
    <>
      <Paper>
        <Grid container spacing={3} style={{ margin: 0 }}>
          {productsData.map((item) => (
            <ProductCard history={props.history} item={item} key={item.id} />
          ))}
        </Grid>
        <Pagination
          onChange={handlePage}
          count={paginationPages}
          color="primary"
          defaultPage={+page}
        />{" "}
      </Paper>
    </>
  );
};

export default ProductList;