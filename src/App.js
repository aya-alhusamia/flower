 //Components
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
//Style
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style";
const theme = {
  mainColor: "#242524", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
