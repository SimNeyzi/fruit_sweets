import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem", color: "white" }}>
      <p className="p__cormorant">{title}</p>
      <img
        src={images.natural_food}
        alt="natural food icon"
        className="natural__img"
      />
    </div>
  );
};

export default SubHeading;
