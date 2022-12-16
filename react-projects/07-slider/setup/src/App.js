import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (num) => {
    if (num >= people.length) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }

    return num;
  };

  // Or we could also use useEffect to flip around the index when it reaches either 0 or the last index
  // useEffect(() => {
  //   const lastIndex = people.length - 1;

  //   if (index > lastIndex) {
  //     setIndex(0);
  //   } else if (index < 0) {
  //     setIndex(lastIndex);
  //   }

  // }, [index, people]);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prevState) => {
        return checkNumber(prevState + 1);
      });
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [index]);

  const prevPersonHandler = () => {
    setIndex(checkNumber(index - 1));
  };

  const nextPersonHandler = () => {
    setIndex(checkNumber(index + 1));
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, i) => {
          const { image, name, title, quote, id } = person;
          let position = "nextSlide";

          if (i === index) {
            position = "activeSlide";
          }
          if (i === index - 1 || (index === 0 && i === people.length - 1)) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button type="button" className="prev" onClick={prevPersonHandler}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextPersonHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
