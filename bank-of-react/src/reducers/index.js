// src/js/reducers/index.js
import { UPDATE_BALANCE } from "../constant";
const initialState = {
  accountBalance: []
};
function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_BALANCE) {
    state.accountBalance.push(action.payload);
  }
  return state;
}
export default rootReducer;
