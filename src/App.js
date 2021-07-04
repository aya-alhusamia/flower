import React, { useState } from "react";
import "./prducts";
import { useSelector } from "react-redux";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";
import _products from "./prducts";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const loadingProduct = useSelector((state) => state.products.loading);
  const loadingShop = useSelector((state) => state.shops.loading);
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

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar theme={theme} />
      {loadingProduct || loadingShop ? <BeatLoader /> : <Routes />}

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </ThemeProvider>
  );
}
export default App;
