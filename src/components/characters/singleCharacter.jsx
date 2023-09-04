import React, { useState } from "react";
import Popup from "../popup_window/popup";
import SingleLocation from "../locations/singleLocation";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSingleLocation = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

function SingleCharacter({ character: { id, image, name, location, origin } }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    data: locationData,
    isLoading,
    isError,
    error,
    status,
  } = useQuery("locationData", () => fetchSingleLocation(location.url), {
    enabled: true,
    onUnmount: (data) => {
      // Cancel the ongoing query if it's still active => cleanup function
      if (data.cancel) {
        data.cancel();
      }
    },
  }); //u can add come condition to enable

  function getCharClasses(id) {
    const defaultClass = isPopupOpen ? "character" : "character char_hover ";
    const classes = [1];
    if (classes.indexOf(id) > -1) {
      return defaultClass + `grid-${id} char-bigger`;
    } else {
      return defaultClass;
    }
  }

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={getCharClasses(id)}>
      <div className="image-container">
        <img className="char-image" src={image} alt="image" />
      </div>
      <p className="char-name">{name}</p>
      <p className="char-location flex-center" onClick={openPopup}>
        location: {location.name}
      </p>
      <p className="char-location flex-center" href={origin.url}>
        origin: {origin.name}
      </p>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <SingleLocation location={locationData} />
      </Popup>
    </div>
  );
}

export default SingleCharacter;
