import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTourHandler, refetchAllHandler }) => {
  const refreshHandler = () => {
    refetchAllHandler();
  };

  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
        </div>
        <div style={{ "text-align": "center" }}>
          <button type="button" className="btn" onClick={refreshHandler}>
            refresh
          </button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTourHandler={removeTourHandler}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
