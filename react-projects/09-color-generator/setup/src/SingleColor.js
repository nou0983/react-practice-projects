import React, { useState, useEffect } from "react";

const SingleColor = ({ weight, rgb, index, colorHex }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${colorHex}`;

  const onClickHandler = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={onClickHandler}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
