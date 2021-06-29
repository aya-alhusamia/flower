import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "../store/action/productActions";
import { fetchShops } from "../store/action/shopActions";
import productReducer from "./reducers/productReducer";
import shopReducer from "./reducers/shopReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchProducts());
store.dispatch(fetchShops());
export default store;
// export default rootReducer;
