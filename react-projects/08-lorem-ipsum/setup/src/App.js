import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newText = data.slice(0, parseInt(count));
    setText(newText);
  };

  const onChangeHandler = (e) => {
    setCount(e.target.value);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={onSubmitHandler}>
        <label htmlFor="count">paragraphs: </label>
        <input
          type="number"
          max="8"
          min="0"
          name="count"
          id="count"
          value={count}
          onChange={onChangeHandler}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
