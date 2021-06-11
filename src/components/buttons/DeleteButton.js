import { DeleteButtonStyled } from "../../style";
import { FaBeer } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  // const product = props.product;
  // console.log(product);
  // const handleDelete = (productID) => {
  //   console.log(productID, "productID");
  //   props.deleteProduct(productID);
  // };
  return (
    <DeleteButtonStyled
      onClick={() => dispatch(deleteProduct(props.productID))}
    >
      <FaBeer />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
