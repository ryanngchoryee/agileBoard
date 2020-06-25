import { combineReducers } from "redux";
import { cardReducer } from "./CardReducer";

export const rootReducer = combineReducers({
  card: cardReducer,
});
