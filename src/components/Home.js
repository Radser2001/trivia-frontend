import React from "react";
import { Link } from "react-router-dom";
import Fact from "./Fact";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-6xl mb-8 mt-12">Trivia Hub</h1>
      <div className="w-10/12 lg:w-4/12">
        <Fact />
      </div>
      <Link
        to="/all"
        className="mt-2 inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
      >
        All Trivia
      </Link>
    </div>
  );
};

export default Home;
