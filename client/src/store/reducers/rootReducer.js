import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import favoriteBookReducer from "./favoriteBookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  favoriteBook: favoriteBookReducer,
});

export default rootReducer;
