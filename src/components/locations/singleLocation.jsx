import React from "react";
import Residents from "./residents";
import { useState } from "react";
import Popup from "../popup_window/popup";

function SingleLocation({
  location: { name, dimension, type, residents, created },
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="location">
      <p className="loc_name">name: {name}</p>
      {dimension !== "unknown" && (
        <p className="loc_dimension">dimension: {dimension}</p>
      )}
      <p className="loc_type">type: {type}</p>
      <p>created in: {created}</p>
      {residents.length !== 0 && <button onClick={openPopup}>residents</button>}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <Residents input={residents} />
      </Popup>
    </div>
  );
}

export default SingleLocation;
