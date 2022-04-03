import React,{useState} from 'react'
import {produce} from 'immer'
const TreeFellItems = () => {
    const [people, setPeople] = useState([
        { id: "5", firstName: "one", lastName: "two" }
      ]);
    
      return (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setPeople(currentPeople => [
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
          {people.map((p, index) => {
            return (
              <div key={p.id}>
                <input
                  onChange={e => {
                    const firstName = e.target.value;
                    setPeople(currentPeople =>
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
                    setPeople(currentPeople =>
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
                    setPeople(currentPeople =>
                      currentPeople.filter(x => x.id !== p.id)
                    );
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
          <div>{JSON.stringify(people, null, 2)}</div>
        </div>
      );
}

export default TreeFellItems