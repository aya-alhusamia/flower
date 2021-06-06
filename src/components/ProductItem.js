import { Products } from "../style";
import DeleteButton from "../components/buttons/DeleteButton";
const ProductItem = (props) => {
  console.log(props, "props.....");
  return (
    <Products>
      <img
        onClick={() => props.setProduct(props.product)}
        src={props.product.image}
      />
      <p>{props.product.name} </p>
      <p>{props.product.price}</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.id}
      ></DeleteButton>
    </Products>
  );
};
export default ProductItem;
