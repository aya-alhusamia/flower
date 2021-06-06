import React, { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { List } from "../style";
//Data
// import products from "../prducts";
const ProductsList = (props) => {
  const [query, setQuery] = useState("");
  let filterdProduct = props.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
  let productList = filterdProduct.map((product, index) => (
    <ProductItem
      product={product}
      key={product.id}
      id={product.id}
      setProduct={props.setProduct}
      deleteProduct={props.deleteProduct}
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
