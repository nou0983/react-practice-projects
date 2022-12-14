import React from "react";

const Categories = ({ categories, filterHandler }) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={i}
            onClick={() => {
              filterHandler(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
