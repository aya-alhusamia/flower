import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:#f9dada;
        color: #242424 
        /* text-align : center; */
    }
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`;
export const Hame = styled.div`
  text-align: center;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: dimgrey;
  }
  img {
    grid-column: 1;
    grid-row: 1 / -1;
    align-self: center;
    width: 70.8%;
    height: 20%;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;  
`;
export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  img{
    width: 80%;
  }
  
`;
