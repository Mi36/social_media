import React from "react";
import Pin from "./Pin";

const MasonryLayout = ({ pins }) => {
  return (
    <div>
      {pins?.map((pin) => (
        <Pin key={pin._id} pin={pin} />
      ))}
    </div>
  );
};

export default MasonryLayout;
