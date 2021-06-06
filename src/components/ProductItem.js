import { Products } from "../style";
// import product from "../prducts";
const ProductItem = (props) => {
  return (
    <Products>
      <img
        onClick={() => props.setProduct(props.product)}
        src={props.product.image}
      />
      <p>{props.product.name} </p>
      <p>{props.product.price}</p>
    </Products>
  );
};
export default ProductItem;
