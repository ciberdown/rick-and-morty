import React from "react";

function SingleCharacter({ character }) {
  console.log(character);
  return (
    <div>
      <p className="char_name">{character.name}</p>
    </div>
  );
}

export default SingleCharacter;
