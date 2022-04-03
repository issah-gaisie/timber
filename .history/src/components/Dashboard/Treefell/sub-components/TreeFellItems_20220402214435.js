import React,{useState} from 'react'
import {produce} from 'immer'
const TreeFellItems = () => {
    const [people, set] = useState([
        { id: "5", firstName: "one", lastName: "two" }
      ]);
    
      return (
        <div style={{ textAlign: "center" }}>
         
          {people.map((p, index) => {
            return (
              <div key={p.id}>
                <input
                  onChange={e => {
                    const firstName = e.target.value;
                    set(currentPeople =>
                      produce(currentPeople, v => {
                        v[index].firstName = firstName;
                      })
                    );
                  }}
                  value={p.firstName}
                  placeholder="first name"
                />
                <input
                  onChange={e => {
                    const lastName = e.target.value;
                    set(currentPeople =>
                      produce(currentPeople, v => {
                        v[index].lastName = lastName;
                      })
                    );
                  }}
                  value={p.lastName}
                  placeholder="last name"
                />
                <button
                  onClick={() => {
                    set(currentPeople =>
                      currentPeople.filter(x => x.id !== p.id)
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
              set(currentPeople => [
                ...currentPeople,
                {
                  firstName: "",
                  lastName: ""
                }
              ]);
            }}
          >
            add new person
          </button>
          <div>{JSON.stringify(people, null, 2)}</div>
        </div>
      );
}

export default TreeFellItems