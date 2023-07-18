import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchdata } from "../fetchdata";
import SingleCharacter from "../singleCharacter/SingleCharacter";
import { useDispatch, useSelector } from "react-redux";
import { NextPage, PrevPage } from "../../redux/actions/PageNumberActions";

export default function Characters() {
  const url = "https://rickandmortyapi.com/api/character/?page=";
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.Page_Number.page_number);

  const {
    data: characters, //{info:{...} , results:{...}}
    isLoading,
    isError,
    error,
    status,
  } = useQuery(["characters", pageNumber], () => fetchdata(url + pageNumber));
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
          onClick={() => dispatch(PrevPage())}
        >
          prev page
        </button>
        <button
          disabled={!characters.info.next}
          onClick={() => dispatch(NextPage())}
        >
          next page
        </button>
      </div>
    </>
  );
}
