import React, { useState } from "react";

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeTourHandler,
  refetchAllHandler,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const readMoreHandler = () => {
    setIsReadMore(!isReadMore);
  };
  
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {isReadMore ? info : `${info.substring(0, 200)}...`}
          <button type="button" onClick={readMoreHandler}>
            {isReadMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeTourHandler(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
