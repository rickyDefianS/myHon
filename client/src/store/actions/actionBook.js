import axios from "axios";
import { FETCH_FAVORITE_BOOKS, BASE_URL, FETCH_BOOKS } from "./actionType";

export const fetchBooks = (payload) => {
  return {
    type: FETCH_BOOKS,
    payload,
  };
};

export const getBooks = (query) => {
  return (dispatch) => {
    return axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchBooks(data));
      });
  };
};

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
    return axios.post(`${BASE_URL}/favorites`, newFavoriteBook).then(() => {
      dispatch(getFavoriteBooks());
    });
  };
};
