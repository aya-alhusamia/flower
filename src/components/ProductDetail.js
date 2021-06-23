import { DetailWrapper } from "../style";
import { useParams, Redirect } from "react-router-dom";
import DeleteButton from "../components/buttons/DeleteButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions";

const ProductDetail = (props) => {
  const productsSlug = useParams().productsSlug;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const product = products.find((product) => product.slug === productsSlug);
  if (!product) return <Redirect to="/" />;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setProduct(null)}>Back</button>
      <DeleteButton
        deleteProduct={() => dispatch(deleteProduct(product.id))}
      ></DeleteButton>
      <Link to={`/products/${product.id}/edit`}>
        <button>edit</button>
      </Link>
    </DetailWrapper>
  );
};

export default ProductDetail;
