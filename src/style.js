import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  
`;
export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#6200ee",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
};
export const Hame = styled.div`
  text-align: center;
  font-family: Ink Free;
  h1 {
    font-family: Brush Script MT;
    /* color: dimgrey; */
  }
  img {
    grid-column: 1;
    grid-row: 1 / -1;
    align-self: center;
    width: 70.8%;
    height: 20%;
  }
  img:hover {
    height: 30%;
    border: 3px solid #d5c4a1;
    border-radius: 50%;
    content: url("https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/FB68_LOL_preset_proflowers-tile-wide-mv-new.jpeg?v=c6f5ef3a8cea47e7940aeea8ac6b6e3b");
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  img {
    width: 80%;
  }
  img:hover {
    border: 3px solid #d5c4a1;
    border-radius: 50%;
  }
  p:hover {
    background-color: #d5c4a1;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;
export const DeleteButtonStyled = styled.button`
  color: #414141;
  &:hover {
    border-radius: 100px;
  }
`;
export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.body};
  &.active {
    background-color: gray;
  }
`;

export const Logo = styled(Link)`
  padding: 10px;
  img {
    width: 50%;
    height: 10%;
  }
`;
