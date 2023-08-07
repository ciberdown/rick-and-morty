import React from "react";

function SingleCharacter({ character }) {
  console.log(character);
  return (
    <div className="character">
      <img className="char-image" src={character.image} alt="image" />
      <p className="char-name">{character.name}</p>
      <a className="char-location" href={character.location.url}>
        location: {character.location.name}
      </a>
      <a className="char-location" href={character.origin.url}>
        origin: {character.origin.name}
      </a>
    </div>
  );
}

export default SingleCharacter;
