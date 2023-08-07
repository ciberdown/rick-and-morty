import React from "react";

function SingleLocation({ location }) {
  console.log(location);

  return (
    <div className="location">
      <p className="loc_name">{location.name}</p>
    </div>
  );
}

export default SingleLocation;
