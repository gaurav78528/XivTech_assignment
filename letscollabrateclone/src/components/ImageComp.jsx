import React from "react";

const ImageComp = ({ item }) => {
  return (
    <div className="img">
      <img src={item.url} alt={item.title} />
    </div>
  );
};

export default ImageComp;
