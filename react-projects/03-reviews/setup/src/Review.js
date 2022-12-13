import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    }

    if (num <= 0) {
      return people.length - 1;
    }

    return num;
  };

  const nextPersonHandler = () => {
    setIndex((prevState) => {
      const newIndex = checkNumber(prevState + 1);
      return newIndex;
    });
  };

  const prevPersonHandler = () => {
    setIndex((prevState) => {
      const newIndex = checkNumber(prevState - 1);
      return newIndex;
    });
  };

  const randNumber = () => Math.floor(Math.random() * people.length);

  const randomPersonHandler = () => {
    setIndex((prevState) => {
      let newIndex = randNumber();

      while (newIndex === prevState) {
        newIndex = randNumber();
      }
      return newIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPersonHandler}>
        surpise me
      </button>
    </article>
  );
};

export default Review;
