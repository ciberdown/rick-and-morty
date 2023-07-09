import React from "react";

export default function SingleCharacter({ character }) {
  return (
    <div className="character">
      <img src={character.image} alt="character image" />
      <div className="container">
        <p className="name">{character.name}</p>
        <p>loc: {character.location.name}</p>
        <p>oringin: {character.origin.name}</p>
      </div>
    </div>
  );
}
