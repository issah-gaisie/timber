import React, { useState } from "react";
import { produce } from "immer";
import Input from "../../../Input";
import { nanoid } from "nanoid";
import { RiCloseLine } from "react-icons/ri";

const TreeFellItems = () => {
  const [treeFellItems, setTreeFellItems] = useState([
    {
      description: "description",
      dimension: "dimension",
      quantity: "quantity",
      volume: "volume",
      id: nanoid(),
    },
  ]);

  return (
    <div className="w-full">
      {treeFellItems.map((p, index) => {
        return (
          <div className="flex space-x-3 items-end" key={p.id}>
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
                placeholder="Description"
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
                placeholder="Dimension"
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">Volume</span>
              <Input
                onChange={(e) => {
                  const volume = e.target.value;
                  setTreeFellItems((currentTreeFellItems) =>
                    produce(currentTreeFellItems, (v) => {
                      v[index].volume = volume;
                    })
                  );
                }}
                value={p.volume}
                placeholder="Volume"
              />
            </label>
            <label className="block">
              <span className="block text-md  text-gray-700 mb-3">
                Quantity
              </span>
              <Input
                onChange={(e) => {
                  const quantity = e.target.value;
                  setTreeFellItems((currentTreeFellItems) =>
                    produce(currentTreeFellItems, (v) => {
                      v[index].quantity = quantity;
                    })
                  );
                }}
                value={p.quantity}
                placeholder="Quantity"
              />
            </label>
            <button
              className="text-white flex items-center justify-center rounded w-7 h-7 rounded-full text-lg bg-red-500"
              onClick={() => {
                setTreeFellItems((currentTreeFellItems) =>
                  currentTreeFellItems.filter((x) => x.id !== p.id)
                );
              }}
            >
              <RiCloseLine />
            </button>
          </div>
        );
      })}
      <button
        className="w-auto sm:px-3 bg-tclPrimary/75 text-white font-semibold py-1 my-3 rounded rounded-md self-end"
        onClick={() => {
          setTreeFellItems((currentTreeFellItems) => [
            ...currentTreeFellItems,
            {
              description: "",
              dimension: "",
              quantity: "",
              volume: "",
              id: nanoid(),
            },
          ]);
        }}
      >
        Add Item
      </button>
      {/* <div>{JSON.stringify(treeFellItems, null, 2)}</div> */}
    </div>
  );
};

export default TreeFellItems;
