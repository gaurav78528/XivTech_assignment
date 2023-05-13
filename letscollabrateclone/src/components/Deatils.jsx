import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Deatils = ({ item }) => {
  return (
    <div className="details">
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <div className="link">
        <p>{item.link}</p>
        <BsArrowRight />
      </div>
    </div>
  );
};

export default Deatils;
