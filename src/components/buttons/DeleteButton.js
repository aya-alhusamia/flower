import { DeleteButtonStyled } from "../../style";
import { FaBeer } from "react-icons/fa";
const DeleteButton = (props) => {
  const handleDelete = (productID) => {
    console.log(productID, "productID");
    props.deleteProduct(productID);
  };
  return (
    <DeleteButtonStyled onClick={() => handleDelete(props.productID)}>
      <FaBeer />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
