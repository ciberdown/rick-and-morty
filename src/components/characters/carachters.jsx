import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { charactersURL } from "../../usage/fetchData/urls";
import { useDispatch, useSelector } from "react-redux";
import fetchCharactersList from "../../usage/fetchData/fetchCharactersList";
import SingleCharacter from "./singleCharacter";
import "./_characters.scss";
import {
  nextCharPage,
  prevCharPage,
} from "../../usage/redux/reducers/characterReducers";
import CustomError from "../errors/errors";
import CustomLoading from "../loading/loadings";
import Buttons from "../buttons/buttons";

function Characters() {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.innerHeight + window.scrollY;
      // Calculate the total height of the page
      const totalPageHeight = document.documentElement.scrollHeight;

      // Define a threshold (e.g., 10 pixels) to trigger the log
      const threshold = 1;

      // If the scroll position is close to the bottom of the page
      if (totalPageHeight - scrollPosition < threshold) {
        console.log("Reached the bottom of the page!");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
