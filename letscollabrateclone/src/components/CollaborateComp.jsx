import React from "react";
import Deatils from "./Deatils";
import ImageComp from "./ImageComp";

const CollaborateComp = ({ item }) => {
  return (
    <div className="container">
      <Deatils item={item} />

      <div className="img">
        <ImageComp item={item} />
      </div>
    </div>
  );
};

export default CollaborateComp;
