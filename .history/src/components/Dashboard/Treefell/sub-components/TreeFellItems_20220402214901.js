import React,{useState} from 'react'
import {produce} from 'immer'
import Input from '../../../Input';
const TreeFellItems = () => {
    const [treeFellItems, setTreeFellItems] = useState([
        { id: "5", description: "one", lastName: "two" }
      ]);
    
      return (
        <div style={{ textAlign: "center" }}>
         
          {treeFellItems.map((p, index) => {
            return (
              <div key={p.id}>
                <Input
                  onChange={e => {
                    const description = e.target.value;
                    setTreeFellItems(currentTreeFellItems =>
                      produce(currentTreeFellItems, v => {
                        v[index].description = description;
                      })
                    );
                  }}
                  value={p.description}
                  placeholder="first name"
                />
                <Input
                  onChange={e => {
                    const lastName = e.target.value;
                    setTreeFellItems(currentTreeFellItems =>
                      produce(currentTreeFellItems, v => {
                        v[index].lastName = lastName;
                      })
                    );
                  }}
                  value={p.lastName}
                  placeholder="last name"
                />
                <button
                  onClick={() => {
                    setTreeFellItems(currentTreeFellItems =>
                      currentTreeFellItems.filter(x => x.id !== p.id)
                    );
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
           <button
            onClick={() => {
              setTreeFellItems(currentTreeFellItems => [
                ...currentTreeFellItems,
                {
                  description: "",
                  lastName: ""
                }
              ]);
            }}
          >
           Add Item
          </button>
          <div>{JSON.stringify(treeFellItems, null, 2)}</div>
        </div>
      );
}

export default TreeFellItems