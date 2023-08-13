"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Exercise } from "@/types/types";
import Todo from "./Todo";

const Search = () => {
  const router = useRouter();

  const initialState = {
    height: 0,
    weight: 0,
  };

  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState(initialState);
  const [search, setSearch] = useState(false);
  const [res, resState] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCategory(findCategory(inputs.height, inputs.weight));
    const res: Exercise[] = await getExercises();
    resState(res[0].desc)

    setSearch(true);
  };

  const findCategory = (height: number, weight: number) => {
    const category = height / weight;

    if (category > 3.33) {
      return "light";
    } else if (category < 1.96) {
      return "heavy";
    } else {
      return "medium";
    }
  };

  async function getExercises() {
    const res = await fetch(`http://localhost:3000/api/exercises/${category}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log(res);
    }

    console.log(res);

    return res.json();
  }

  return (
    <div className="bg-blue-700 text-white rounded-lg m-auto w-fit h-fit p-5">
      

      {search ? 
      <div>
        {res}
        <div onClick={() => setSearch(false)} className="text-yellow-400 hover:cursor-pointer">
            Back
        </div>
      </div> : 
      <div>
        <form onSubmit={handleSubmit}>
        <div className="pb-5 flex flex-col">
          <label>Enter Height</label>
          <input
            onChange={handleChange}
            className="text-black px-2 w-[160px]"
            type="number"
            name="height"
            placeholder="height in cm"
            min="120"
            max="300"
          />
        </div>
        <div className="flex-col flex pb-4">
          <label>Enter Weight</label>
          <input
            onChange={handleChange}
            className="text-black px-2 w-[160px]"
            type="number"
            name="weight"
            placeholder="weight in kg"
            min="30"
            max="600"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-black p-3 rounded-full"
        >
          Search
        </button>
      </form>
      </div>}
    </div>
  );
};

export default Search;
