"use client";

import { useState } from "react";
import { sortDomino, findDoubleDomino, flipDomino } from "../utils/utils";

export default function Home() {
  const dominoCard = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [dominoes, setDomino] = useState(dominoCard);
  const [remove, setRemove] = useState("");

  const doubleCount = findDoubleDomino(dominoes);

  const sortAsc = () => {
    const result = sortDomino(dominoes, "asc");
    setDomino(result);
  };

  const sortDesc = () => {
    const result = sortDomino(dominoes, "desc");
    setDomino(result);
  };

  const flip = () => {
    const flipped = flipDomino(dominoes);
    setDomino(flipped);
  };

  const reset = () => {
    setDomino(dominoCard);
    setRemove("");
  };

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dominoes</h1>

      <div className="border-gray-800 rounded-md mb-4 p-3 bg-gray-100">
        <h2 className="font-semibold mb-2">Source</h2>
        <div className="text-sm text-gray-600">
          {dominoes.map((domino, index) => (
            <span key={index}>{`[${domino[0]}, ${domino[1]}]  `}</span>
          ))}
        </div>
      </div>

      <div className="border-gray-800 rounded-md mb-6 p-3 bg-gray-100">
        <span className="font-semibold">Double numbers : </span>
        <span>{doubleCount}</span>
      </div>

      <div className="flex gap-2 mb-6">
        {dominoes.map((domino, index) => {
          const [top, bottom] = domino;
          return (
            <div
              key={index}
              className="border border-gray-800 rounded-md p-2 w-[40px] h-[80px] flex flex-col items-center justify-center"
            >
              <span className="font-semibold mb-2">{top}</span>
              <span className="border-t border-gray-800 w-full"></span>
              <span className="font-semibold mt-2">{bottom}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={sortAsc}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Sort (ASC)
        </button>
        <button
          onClick={sortDesc}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Sort (DESC)
        </button>
        <button
          onClick={flip}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Flip
        </button>

        <button
          onClick={reset}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
