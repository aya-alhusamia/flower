import { DetailWrapper } from "../../style";
import { useParams, Redirect } from "react-router-dom";
// import DeleteButton from "../components/buttons/DeleteButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/action/productActions";

const ShopDetail = (props) => {
  const shopsId = useParams().shopsId;
  const shops = useSelector((state) => state.shops.shops);
  //   const dispatch = useDispatch();

  const shop = shops.find((shop) => shop.id === +shopsId);
  console.log(shopsId);
  if (!shop) return <Redirect to="/" />;
  return (
    <div>
      <DetailWrapper>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />
        {console.log(shop.image)}
        <Link to={`/shops/${shop.id}/products/new`}>
          <button>add Product</button>
        </Link>
      </DetailWrapper>
      <div div className="col-12">
        <ProductsList products={shop.products} />
      </div>
    </div>
  );
};

export default ShopDetail;
