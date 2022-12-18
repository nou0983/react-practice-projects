import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, deleteHandler, editHandler }) => {
  return (
    <div className="grocery-list">
      {items.map(({ id, title }) => {
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editHandler(id, title)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteHandler(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
