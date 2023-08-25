import axios from "axios";
import React, { useEffect, useState } from "react";

function SingleLocation({ location }) {
  const { name, dimension, type, residents } = location;

  console.log(location);
  return (
    <div className="location">
      <p className="loc_name">name: {name}</p>
      {dimension !== "unknown" && (
        <p className="loc_dimension">dimension: {dimension}</p>
      )}
      <p className="loc_type">type: {type}</p>
      <p></p>
    </div>
  );
}

export default SingleLocation;
