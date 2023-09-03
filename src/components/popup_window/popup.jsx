import React from "react";
import "./_popup.scss";

function Popup({ input, isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className={`popup-container ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <button onClick={onClose}>Close</button>
          <div>{children}</div>
        </div>
      </div>
    )
  );
}

export default Popup;
