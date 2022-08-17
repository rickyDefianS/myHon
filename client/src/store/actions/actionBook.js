import axios from "axios";
import { FETCH_FAVORITE_BOOKS, BASE_URL } from "./actionType";

export const fetchFavoriteBooks = (payload) => {
  return {
    type: FETCH_FAVORITE_BOOKS,
    payload,
  };
};

export const getFavoriteBooks = () => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/favorites`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchFavoriteBooks(data));
      });
  };
};

export const postFavoriteBooks = (newFavoriteBook) => {
  return (dispatch) => {
    return axios.post(`${BASE_URL}/favorites`, newFavoriteBook)
      .then(() => {
        dispatch(getFavoriteBooks());
    });
  };
};
