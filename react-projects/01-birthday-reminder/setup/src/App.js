import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log("render");

  const removePersonHandler = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  const removeAllHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <List
              key={person.id}
              {...person}
              removePersonHandler={removePersonHandler}
            />
          );
        })}
        <button type="button" onClick={removeAllHandler}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
