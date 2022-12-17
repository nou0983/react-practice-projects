import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState('#eee');
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values('#eee').all(10));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="color"
            value={color}
            id="color"
            onChange={(e) => setColor(e.target.value)}
            className={`${error && "error"}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, i) => {      
          return <SingleColor key={i} {...color} index={i} colorHex={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
