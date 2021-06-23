import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
//style
import { List } from "../style";
const ProductsList = (props) => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);
  let filterdProduct = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
  let productList = filterdProduct.map((product, index) => (
    <ProductItem
      product={product}
      key={product.id}
      setProduct={props.setProduct}
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
