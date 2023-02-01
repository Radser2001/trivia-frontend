import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllFacts = () => {
  const { data: facts, isLoading } = useQuery(["trivia"], () => {
    return axios
      .request("https://trivia-backend-production.up.railway.app/trivia")
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10/12 lg:w-4/12">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          facts &&
          facts.length &&
          facts.map((fact, id) => {
            return (
              <div className="mb-10 mt-12 w-full">
                <div
                  key={id}
                  className=" p-6 rounded-lg shadow-lg bg-[#212121] "
                >
                  <p className="text-[#fefefe] mb-4 text-center text-2xl">
                    <strong> Q:</strong> {fact && fact.question}
                  </p>

                  <div className="text-center text-xl">
                    <p>
                      <strong>A:</strong> {fact.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="mt-12 inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllFacts;
