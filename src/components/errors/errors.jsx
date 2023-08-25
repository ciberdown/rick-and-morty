import React from "react";

function CustomError({ error }) {
  return <h1>error: {error.message}</h1>;
}

export default CustomError;
