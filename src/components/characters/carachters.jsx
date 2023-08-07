import React, { useState } from "react";
import { useQuery } from "react-query";
import { charactersURL } from "../../usage/fetchData/urls";
import { useDispatch, useSelector } from "react-redux";
import fetchCharactersList from "../../usage/fetchData/fetchCharactersList";
import SingleCharacter from "./singleCharacter";
import {
  nextCharPage,
  prevCharPage,
} from "../../usage/redux/reducers/characterReducers";
import CustomError from "../errors";
import CustomLoading from "../loadings";

function Characters() {
  const dispatch = useDispatch();
  const { characters, isLoading, error, page } = useSelector(
    (state) => state.characters
  );
  useQuery(
    "characters" + page,
    () => fetchCharactersList(charactersURL + page, dispatch),
    {
      enabled: true,
      onUnmount: (data) => {
        if (data.cancel) {
          data.cancel();
        }
      },
    }
  );

  if (isLoading) {
    return <CustomLoading />;
  }
  if (error) {
    return <CustomError error={error} />;
  }
  return (
    characters && (
      <>
        <div className="characters">
          {characters.results.map((character) => (
            <SingleCharacter key={character.id} character={character} />
          ))}
        </div>
        <button
          disabled={!characters.info.prev}
          onClick={() => dispatch(prevCharPage())}
        >
          prev
        </button>
        <button
          disabled={!characters.info.next}
          onClick={() => dispatch(nextCharPage())}
        >
          next
        </button>
      </>
    )
  );
}

export default Characters;
