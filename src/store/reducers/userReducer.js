import * as actionType from "../action/types";
const initialState = {
  users: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
