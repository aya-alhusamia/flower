import React, { useState } from "react";
//Components
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";

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

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Home />
      <ProductsList />
    </ThemeProvider>
  );
}
export default App;
