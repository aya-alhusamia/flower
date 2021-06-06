import { DetailWrapper } from "../style";
import DeleteButton from "../components/buttons/DeleteButton";
const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.setProduct(null)}>Back</button>
      <DeleteButton
        deleteProduct={() => props.deleteProduct}
        productID={props.id}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
