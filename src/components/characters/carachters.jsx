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
import Buttons from "../buttons";

function Characters() {
  const dispatch = useDispatch();
  const { characters, isLoading, error, page } = useSelector(
    (state) => state.characters
  );
  const nextPageHandle = (nextInfo) => {
    nextInfo && dispatch(nextCharPage());
  };
  const prevPageHandle = (prevInfo) => {
    prevInfo && dispatch(prevCharPage());
  };
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
      <div className="char-parent">
        <div className="characters">
          {characters.results.map((character) => (
            <SingleCharacter key={character.id} character={character} />
          ))}
        </div>

        <Buttons
          nextPageHandle={() => nextPageHandle(characters.info.next)}
          prevPageHandle={() => prevPageHandle(characters.info.prev)}
          nextInfo={characters.info.next}
          prevInfo={characters.info.prev}
          page={page}
        />
      </div>
    )
  );
}

export default Characters;
