import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, items }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(id);
  }, [items]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
