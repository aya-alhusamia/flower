// import slugify from "slugify";
// import productsData from "../../prducts";
import * as actionType from "../action/types";
const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actionType.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case actionType.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case actionType.UPDATE_PRODUCT:
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
