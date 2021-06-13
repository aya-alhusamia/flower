import { useState } from "react";
import { Products, UpdateButtonStyled } from "../style";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/actions";
const ProductItem = (props) => {
  // const dispatch = useDispatch();
  console.log(props, "props.....");
  const [photo, setPhoto] = useState(props.product.image);
  return (
    <Products>
      <Link to={`/products/${props.product.slug}`}>
        <img
          src={photo}
          onMouseOver={() => setPhoto(props.product.image_b)}
          onMouseOut={() => setPhoto(props.product.image)}
        />
      </Link>
      <Link to={`/products/${props.product.slug}`}>
        <p>{props.product.name} </p>
      </Link>

      <p>{props.product.price}</p>
      <DeleteButton
        // deleteProduct={props.deleteProduct}
        productID={props.product.id}
      />
    </Products>
  );
};
export default ProductItem;
