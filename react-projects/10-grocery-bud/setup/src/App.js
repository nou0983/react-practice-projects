import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(list);
  }
  return [];
};

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      createAlert(true, "please enter value", "danger");
    } else if (value && isEditing) {
      const newItems = list.map((item) => {
        if (item.id === editId) {
          item.title = value;
        }
        return item;
      });
      setList(newItems);
      setEditId(null);
      setIsEditing(false);
      createAlert(true, "value changed", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: value };
      setList([...list, newItem]);
      createAlert(true, "item added to the list", "success");
    }

    setValue("");
  };

  const deleteHandler = (id) => {
    const newItems = list.filter((item) => {
      return item.id !== id;
    });
    setList(newItems);
    createAlert(true, "item removed", "danger");
  };

  const editHandler = (id, title) => {
    setIsEditing(true);
    setEditId(id);
    setValue(title);
  };

  const createAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    createAlert(true, "empty list", "danger");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        {alert.show && (
          <Alert {...alert} items={list} removeAlert={createAlert} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="value"
            placeholder="e.g. eggs"
            id="value"
            className="grocery"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
