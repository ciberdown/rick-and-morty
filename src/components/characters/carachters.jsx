import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { charactersURL } from "../../usage/fetchData/urls";
import fetchCharactersList from "../../usage/fetchData/fetchCharactersList";
import SingleCharacter from "./singleCharacter";
import "./_characters.scss";
import CustomError from "../errors/errors";
import CustomLoading from "../loading/loadings";
import { Box, LinearProgress } from "@mui/material";

function Characters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false); // Add loading indicator state
  const [scrollY_position, setScrollY_position] = useState(null);

  const { data, isLoading, error, isFetching } = useQuery(
    ["characters", page], // Use an array to include the page in the query key
    () => fetchCharactersList(charactersURL + page),
    {
      enabled: true,
      onUnmount: (data) => {
        if (data.cancel) {
          data.cancel();
        }
      },
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      if (page === 1) {
        setCharacters(data.results);
      } else {
        setCharacters((prev) => [...prev, ...data.results]);
      }
    }
  }, [data]);

  useEffect(() => {
    const interval = setTimeout(() => {
      window.scrollTo(0, scrollY_position);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [scrollY_position]);

  useEffect(() => {
    if (isFetching) {
      setIsLoadingMore(true);
    } else {
      setIsLoadingMore(false);
    }
  }, [isFetching]);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const totalPageHeight = document.documentElement.scrollHeight;
    const threshold = 1;

    if (totalPageHeight - scrollPosition < threshold && !isLoadingMore) {
      // console.log("Reached the bottom of the page!: scroll: ", scrollPosition);
      setScrollY_position(window.scrollY);
      if (data.info.next) setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoadingMore]);

  if (isLoading) {
    return <CustomLoading />;
  }
  if (error) {
    return <CustomError error={error} />;
  }

  return (
    <div className="char-parent">
      <div className="characters">
        {characters.map((character, index) => (
          <SingleCharacter key={index} character={character} />
        ))}
      </div>

      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress sx={{ margin: 10 }} />
        </Box>
      )}
    </div>
  );
}

export default Characters;
