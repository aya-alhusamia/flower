import React, { useState } from "react";
import "./prducts";
//Components
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";
import products from "./prducts";

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
  const [product, setProduct] = useState(null);
  const setView = () => {
    if (product) {
      return <ProductDetail product={product} setProduct={setProduct} />;
    } else {
      return <ProductsList setProduct={setProduct} />;
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Home />
      {/* <ProductsList setProduct={setProduct} />
      <ProductDetail product={product} /> */}
      {setView()}
    </ThemeProvider>
  );
}
export default App;
