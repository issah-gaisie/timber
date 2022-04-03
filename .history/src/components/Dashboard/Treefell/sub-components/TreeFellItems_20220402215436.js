import React, { useState } from "react";
import { produce } from "immer";
import { FormGrid } from "/../Users/AddANewUser";
import Input from "../../../Input";
const TreeFellItems = () => {
  const [treeFellItems, setTreeFellItems] = useState([]);

  return (
    <div style={{ textAlign: "center" }}>
      {treeFellItems.map((p, index) => {
        return (
          <FormGrid key={p.id}>
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
            <button
              onClick={() => {
                setTreeFellItems((currentTreeFellItems) =>
                  currentTreeFellItems.filter((x) => x.id !== p.id)
                );
              }}
            >
              x
            </button>
          </FormGrid>
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
