import * as actionType from "../action/types";
const initialState = {
  shops: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    case actionType.CREATE_SHOP:
      return {
        ...state,
        shops: [...state.shops, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
