import slugify from "slugify";
import productsData from "../prducts";
import { DELETE_PRODUCT } from "./actions";
import { CREATE_PRODUCT } from "./actions";
const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productsToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productsToKeep,
      };
    case CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.slug = slugify(newProduct.name);
      // action.payload.newProduct.id =
      //   state.products[state.products.length - 1].id + 1;
      // // action.payload.newProduct.slug = slugify();
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    default:
      return state;
  }
};
export default reducer;
