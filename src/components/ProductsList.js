import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { List } from "../style";
import FormProduct from "./FormProduct";
//Data
// import products from "../prducts";
const ProductsList = (props) => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");
  let filterdProduct = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
  let productList = filterdProduct.map((product, index) => (
    <ProductItem
      product={product}
      key={product.id}
      // id={product.id}
      setProduct={props.setProduct}
      // deleteProduct={props.deleteProduct}
    />
  ));

  return (
    <List>
      <SearchBar setQuery={setQuery} />
      {productList}
    </List>
  );
};
export default ProductsList;
