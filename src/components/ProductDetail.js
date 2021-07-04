import { DetailWrapper } from "../style";
import { useParams, Redirect } from "react-router-dom";
import DeleteButton from "../components/buttons/DeleteButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/action/productActions";

const ProductDetail = () => {
  const productSlug = useParams().productSlug;
  console.log(useParams().productSlug);
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const product = products.find((product) => product.slug === productSlug);
  console.log(productSlug);
  if (!product) return <Redirect to="/" />;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/products">Back</Link>
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
