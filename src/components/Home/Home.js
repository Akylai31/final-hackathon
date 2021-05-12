import React from "react";
import "./Home.css";
import ProductList from "../ProductsUser/ProductList";
import MainScreen from "../MainScreen/MainScreen"
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3"
import Section4 from "../Section4/Section4";
const Home = ({ history }) => {
  return (
    <>
      <MainScreen/>
      <Section2/>
      <Section3/>
      <Section4/>

      {/* <ProductList history={history} /> */}
    </>
  );
};

export default Home;