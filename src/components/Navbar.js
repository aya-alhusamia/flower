import { Link } from "react-router-dom";
import { NavItem, Logo } from "../style";
import Light from "../image/light.jfif";
import Dark from "../image/dark.png";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
      <Logo to="/" className="navbar-brand">
        <img src={props.theme === "light" ? Light : Dark} />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem
          className="nav-item"
          to="/products"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavItem>

        <NavItem
          className="nav-item"
          to="/products/new"
          style={{ padding: "0.25em 1em" }}
        >
          Add Product
        </NavItem>
      </div>
    </nav>
  );
};
export default Navbar;
