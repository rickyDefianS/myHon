import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBook from "../component/CardBook";
import imgHome from "../myHon-bg.jpg";
import { getBooks } from "../store/actions/actionBook";

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchBook = (e) => {
    e.preventDefault();
    dispatch(getBooks(query)).then(() => setIsLoading(false));
  };

  const { books } = useSelector((state) => {
    return state.book;
  });

  useEffect(() => {
    if (query == "") {
      dispatch(getBooks("japan")).then(() => setIsLoading(false));
    } else {
      dispatch(getBooks(query)).then(() => setIsLoading(false));
    }
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl mt-20 px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-gray-300">
              Find and save <br />
              your favorite hon
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Hon or 本 means to{" "}
              <span className="text-zinc-300 font-medium">book</span>,{" "}
              <span className="text-cyan-300 font-medium">source</span>, or{" "}
              <span className="text-rose-300 font-medium">root</span> in
              Japanese language.
              <br />
              my:hon will help you to find your Hon and save it as your favorite
              Hon.
              <br />
              Let's find your{" "}
              <span className="text-zinc-300 font-medium">books</span>, save
              your <span className="text-cyan-300 font-medium">sources</span>,
              and never forget your{" "}
              <span className="text-rose-300 font-medium">roots</span>!
            </p>
            <div>
              <form
                onSubmit={(e) => {
                  searchBook(e);
                }}
              >
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300"
                    placeholder="Search my Hon..."
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-zinc-600 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-300 dark:hover:bg-cyan-200 dark:focus:ring-cyan-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={imgHome} alt="books image" className="rounded" />
          </div>
        </div>
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-12 md:p-8 lg:p-10">
          {isLoading && (
            <div className="text-center">
              <div role="status">
                <svg
                  className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!isLoading && books.items && books.items.length > 0 && (
            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {books.items.map((book) => (
                <CardBook
                  key={book.id}
                  title={book.volumeInfo.title}
                  imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                  author={
                    Array.isArray(book.volumeInfo.authors)
                      ? book.volumeInfo.authors.toString()
                      : book.volumeInfo.authors
                  }
                  rating={book.volumeInfo.averageRating}
                  currentPage="home"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
