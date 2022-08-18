import { FETCH_FAVORITE_BOOKS } from "../actions/actionType";

const initialState = {
  favoriteBooks: [],
};

export default function favoriteBookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITE_BOOKS:
      return {
        ...state,
        favoriteBooks: action.payload,
      };
    default:
      return state;
  }
}
