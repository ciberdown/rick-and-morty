import React, { useState } from "react";
import "./_episodes.scss";
import Popup from "../popup_window/popup";
import Characters from "../characters/carachters";
import Residents from "../locations/residents";

function SingleEpisode({
  episode: { name, air_date, created, characters, episode },
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={isPopupOpen ? "episode" : "episode episode-hover"}>
      <p>Episode: {episode}</p>
      <p className="episode_name">Name: {name}</p>
      <p>Air date: {air_date}</p>
      <p>Created: {created}</p>
      <button onClick={openPopup}>Characters</button>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <Residents input={characters} />
      </Popup>
    </div>
  );
}

export default SingleEpisode;
