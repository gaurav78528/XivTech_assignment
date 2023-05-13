import React from "react";
import Deatils from "./Deatils";
import ImageComp from "./ImageComp";
import Button from "./Button";

const CollaborateComp = ({ item }) => {
  return (
    <div className="collaborate">
      <Deatils item={item} />
      <ImageComp item={item} />
    </div>
  );
};

export default CollaborateComp;
