import React from "react";
import CardBook from "../component/CardBook";
import imgHome from "../myHon-bg.jpg";

export default function Home() {
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
              my:hon will help you to find your Hon and save it as your
              favorite Hon.
              <br />
              Let's find your{" "}
              <span className="text-zinc-300 font-medium">books</span>, save
              your <span className="text-cyan-300 font-medium">sources</span>,
              and never forget your{" "}
              <span className="text-rose-300 font-medium">roots</span>!
            </p>
            <div>
              <form>
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
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search my Hon..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        </div>
      </section>
    </>
  );
}
