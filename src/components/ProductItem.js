import { Products } from "../style";
const ProductItem = (props) => {
  return (
    <Products>
      <img src={props.product.image} />
      <p>{props.product.name} </p>
      <p>{props.product.price}</p>
    </Products>
  );
};
export default ProductItem;
