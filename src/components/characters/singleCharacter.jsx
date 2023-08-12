import React from "react";

function SingleCharacter({ character }) {
  function getCharClasses() {
    const defaultClass = "character ";
    if (character.id%10 === 1) {
      return defaultClass + " char-1-bigger";
    } else if (character.id%16 === 1) {
      return defaultClass + " char-16-bigger";
    }
    return defaultClass;
  }
  return (
    <div className={getCharClasses()}>
      <div className="image-container">
        <img className="char-image" src={character.image} alt="image" />
      </div>
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
