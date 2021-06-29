import { Products, UpdateButtonStyled } from "../../style";
// import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/action/productActions";
const ShopItem = (props) => {
  //   const dispatch = useDispatch();
  //   console.log(props, "props.....");
  return (
    <Products>
      <Link to={`/shops/${props.shop.slug}`}>
        <img src={props.shop.image} />
      </Link>
      <Link to={`/shops/${props.shop.id}`}>
        <p>{props.shop.name} </p>
      </Link>

      <p>{props.shop.price}</p>
    </Products>
  );
};
export default ShopItem;
