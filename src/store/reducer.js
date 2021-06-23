import slugify from "slugify";
import productsData from "../prducts";
import { DELETE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCTS } from "./actions";
import { CREATE_PRODUCT } from "./actions";
const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };

    default:
      return state;
  }
};
export default reducer;
