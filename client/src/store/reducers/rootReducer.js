import { combineReducers } from "redux";
import favoriteBookReducer from "./favoriteBookReducer";

const rootReducer = combineReducers({
  favoriteBook: favoriteBookReducer,
});

export default rootReducer;
