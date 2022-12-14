import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      return items;
    }

    const newItems = items.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });

    return newItems;
  };

  const filterHandler = (category) => {
    setMenuItems(filterItems(category));
  };

  useEffect(() => {
    // Using reduce method to filter out the unique category values
    // const newCategories = menuItems.reduce(
    //   (acc, item) => {
    //     if (!acc.includes(item.category)) {
    //       acc.push(item.category);
    //     }

    //     return acc;
    //   },
    //   ["all"]
    // );

    // Using set data to filter out the unique category values
    const newCategories = ['all', ...new Set(items.map((item) => item.category))];

    setCategories(newCategories);
  }, []);

  return (
    <main className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterHandler={filterHandler} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
