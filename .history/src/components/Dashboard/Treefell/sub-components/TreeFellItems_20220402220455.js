import React, { useState } from "react";
import { produce } from "immer";
import { FormGrid } from "../../Users/AddANewUser";
import Input from "../../../Input";
import { nanoid } from "nanoid";
const TreeFellItems = () => {
  const [treeFellItems, setTreeFellItems] = useState([]);

  return (
    <div className="w-full">
      {treeFellItems.map((p, index) => {
        return (
          <div className="flex space-x-3 " key={p.id}>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Description
              </span>
              <Input
                onChange={(e) => {
                  const description = e.target.value;
                  setTreeFellItems((currentTreeFellItems) =>
                    produce(currentTreeFellItems, (v) => {
                      v[index].description = description;
                    })
                  );
                }}
                value={p.description}
                placeholder="first name"
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Dimension
              </span>
              <Input
                onChange={(e) => {
                  const dimension = e.target.value;
                  setTreeFellItems((currentTreeFellItems) =>
                    produce(currentTreeFellItems, (v) => {
                      v[index].dimension = dimension;
                    })
                  );
                }}
                value={p.dimension}
                placeholder="last name"
              />
            </label>
            <button
              className="text-white flex items-center justify-center rounded w- rounded-lg text-lg bg-red-500"
              onClick={() => {
                setTreeFellItems((currentTreeFellItems) =>
                  currentTreeFellItems.filter((x) => x.id !== p.id)
                );
              }}
            >
              x
            </button>
          </div>
        );
      })}
      <button
        className="w-full sm:w-auto sm:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
        onClick={() => {
          setTreeFellItems((currentTreeFellItems) => [
            ...currentTreeFellItems,
            {
              description: "",
              dimension: "",
              id: nanoid(),
            },
          ]);
        }}
      >
        Add Item
      </button>
      <div>{JSON.stringify(treeFellItems, null, 2)}</div>
    </div>
  );
};

export default TreeFellItems;
