import { useState } from "react";
import { Products, UpdateButtonStyled } from "../style";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/action/productActions";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  console.log(props, "props.....");
  return (
    <Products>
      <Link to={`/products/${props.product.slug}`}>
        <img src={props.product.image} />
      </Link>
      <Link to={`/products/${props.product.slug}`}>
        <p>{props.product.name} </p>
      </Link>

      <p>{props.product.price}</p>
      <DeleteButton
        deleteProduct={() => dispatch(deleteProduct(props.product.id))}
      />
    </Products>
  );
};
export default ProductItem;
