import React, { useState } from "react";
import { useSelector } from "react-redux";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "../SearchBar";
//style
import { List } from "../../style";
const ShopList = (props) => {
  const [query, setQuery] = useState("");
  const shops = useSelector((state) => state.shops.shops);
  let filterdShop = shops.filter((shop) =>
    shop.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
  let shopList = filterdShop.map((shop, index) => (
    <ShopItem shop={shop} key={shop.id} setShop={props.setShop} />
  ));

  return (
    <List>
      <SearchBar setQuery={setQuery} />
      {shopList}
    </List>
  );
};
export default ShopList;
