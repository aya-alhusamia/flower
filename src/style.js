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
    width: 40%;
    height: 10%;
    margin-top: 0;
    box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
      0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
      0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
  }
  img:hover {
    height: 10%;
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
  background-color:gray &.active {
    background-color: gray;
  }
`;
export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const UpdateButtonStyled = styled.button`
  color: white;
`;
export const AddProductDiv = styled.div`
  border-radius: 15px;
  padding: 30px;
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
  input {
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: 2px solid white;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 4px;
  border: none;
  color: #414141;
`;
export const ThemeButton = styled.button`
  position: absolute;
  right: 50px;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  font-size: 24px;
`;
