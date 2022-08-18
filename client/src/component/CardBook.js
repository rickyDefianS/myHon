import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { postFavoriteBooks } from "../store/actions/actionBook";

export default function CardBook({
  title,
  imgUrl,
  author,
  rating,
  currentPage,
}) {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  async function saveBook() {
    dispatch(postFavoriteBooks({ title, imgUrl, author, rating }))
      .then(() => {
        MySwal.fire("Favorit Hon", "Success save your favorit Hon", "success");
      })
  }

  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg border shadow-md md:flex-row max-w-xl hover:hover:bg-gray-700 border-gray-700">
        <img
          className="object-cover w-full h-64 rounded-t-lg md:h-64 md:w-48 md:rounded-none md:rounded-l-lg text-gray-300"
          src={imgUrl ? imgUrl : ""}
          alt={`Cover Image ${title}`}
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full h-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-gray-300">
            {title.slice(0, 100)}
            {title.length > 100 ? "..." : ""}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            {!author
              ? "Unknown"
              : author.length > 100
              ? author.slice(0, 100) + " ..."
              : author}
          </p>
          <div>
            <Rater rating={rating ? rating : 0} total={5} interactive={false} />{" "}
            <span className="text-white pl-2">
              {!rating ? "0" : rating}/5.0
            </span>
          </div>
          <div className="bottom-0">
            {currentPage != "favorite" && (
              <button
                type="button"
                className="text-zinc-600 w-24 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-300 dark:hover:bg-rose-200 dark:focus:ring-rose-300"
                onClick={() => saveBook()}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
