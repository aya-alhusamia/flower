import React, { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { List } from "../style";
//Data
import products from "../prducts";
const ProductsList = (props) => {
  const [query, setQuery] = useState("");
  let filterdProduct = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
  let productList = filterdProduct.map((product) => (
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
