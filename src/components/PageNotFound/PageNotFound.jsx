import React from "react";
import image from "../../images/pnf.jpg";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="error-container">
      <img src={image} alt="" />
    </div>
  );
};

export default PageNotFound;
