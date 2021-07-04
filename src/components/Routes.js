import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
//Components
import Home from "./Home";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import ShopList from "./shops/ShopList";
import ShopDetail from "./shops/ShopDetail";
import { useSelector } from "react-redux";
const Routes = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <Switch>
      <Route
        path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
      >
        <AddProduct />
      </Route>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/shops/:shopsId">
        <ShopDetail />
      </Route>
      <Route path="/products">
        <ProductsList products={products} />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
