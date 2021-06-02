// Components
import ProductItem from "./ProductItem";
import { List } from "../style";
//Data
import products from "../prducts";
const ProductsList = () => {
  let newProduct = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <List>{newProduct}</List>;
};
export default ProductsList;
