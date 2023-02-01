import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const Fact = () => {
  const [viewAnswer, setViewAnswer] = useState(false);

  const {
    data: fact,
    refetch,
    isLoading,
  } = useQuery(["trivia"], () => {
    return axios
      .request("https://trivia-backend-production.up.railway.app/trivia/random")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="mb-12 mt-12 w-full">
      {!isLoading ? (
        <div className=" p-6 rounded-lg shadow-lg bg-[#212121] ">
          <p className="text-[#fefefe] mb-4 text-center text-2xl">
            {fact && fact.question}
          </p>
          <div className="text-center">
            <button
              onClick={() => {
                setViewAnswer(!viewAnswer);
              }}
              type="button"
              className="mt-6 inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >
              Answer !
            </button>
          </div>
          {viewAnswer && (
            <div className="text-center text-xl mt-10">
              <p>{fact.answer}</p>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div className="text-center">
        <button
          onClick={refetch}
          className="mt-12 inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
        >
          Another Fact !
        </button>
      </div>
    </div>
  );
};

export default Fact;
