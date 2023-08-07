import React from "react";

function SingleEpisode({ episode }) {
  return (
    <div className="episode">
      <p className="episode_name">{episode.name}</p>
    </div>
  );
}

export default SingleEpisode;
