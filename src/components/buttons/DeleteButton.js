import { DeleteButtonStyled } from "../../style";
import { FaBeer } from "react-icons/fa";
const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={props.deleteProduct}>
      <FaBeer />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
