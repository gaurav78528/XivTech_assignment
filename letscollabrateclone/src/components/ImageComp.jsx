import React from "react";

const ImageComp = ({ item }) => {
  return (
    <div>
      <img src={item.url} alt={item.title} height={"700px"} width={"400px"} />
    </div>
  );
};

export default ImageComp;
