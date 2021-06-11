import React, { useState } from "react";
import "./prducts";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
//Components
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";
import _products from "./prducts";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("color") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("color", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("color", "light");
    }
  };

  // const [products, setProducts] = useState(_products);

  // const deleteProduct = (productId) => {
  //   console.log(productId);
  //   let filterdProduct = products.filter((product) => product.id !== productId);
  //   setProducts(filterdProduct);
  //   setProduct(null);
  // };
  const [product, setProduct] = useState(null);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar theme={theme} />
      <Switch>
        <Route path="/products/:productsSlug">
          <ProductDetail />
          {/* <ProductDetail products={products} deleteProduct={deleteProduct} /> */}
        </Route>
        <Route path="/products">
          <ProductsList
            setProduct={setProduct}
            // products={products}
            // deleteProduct={deleteProduct}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </ThemeProvider>
  );
}
export default App;
