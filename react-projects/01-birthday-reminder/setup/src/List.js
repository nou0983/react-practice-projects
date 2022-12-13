import React from "react";

const List = ({ id, name, age, image, removePersonHandler }) => {
  return (
    <>
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          <button type="button" className="btn" onClick={() => removePersonHandler(id)}>
            clear
          </button>
        </div>
      </article>
    </>
  );
};

export default List;
