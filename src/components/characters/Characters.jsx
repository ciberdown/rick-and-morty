import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchdata } from "../fetchdata";
import SingleCharacter from "../singleCharacter/SingleCharacter";

export default function Characters() {
  const [page, setPage] = useState(1);
  const url = "https://rickandmortyapi.com/api/character/?page=";
  const {
    data: characters, //{info:{...} , results:{...}}
    isLoading,
    isError,
    error,
    status,
  } = useQuery(["characters", page], () => fetchdata(url + page));
  // console.log(characters.results[0]);
  if (isLoading) {
    return <h2 data-testid="loading">Loading ...</h2>;
  }
  if (isError) {
    return <h2 data-testid="error">error: {error.message}</h2>;
  }
  return (
    <>
      <div data-testid="chars" className="characters">
        {characters.results.map((character) => (
          <SingleCharacter
            data-testid="single-character"
            key={character.id}
            character={character}
          />
        ))}
      </div>
      <div className="btns">
        <button
          disabled={!characters.info.prev}
          onClick={() => setPage((oldPage) => oldPage - 1)}
        >
          prev page
        </button>
        <button
          disabled={!characters.info.next}
          onClick={() => setPage((oldPage) => oldPage + 1)}
        >
          next page
        </button>
      </div>
    </>
  );
}
