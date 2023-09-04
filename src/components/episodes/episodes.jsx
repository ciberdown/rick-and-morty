import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchEpisodes from "../../usage/fetchData/fetchEpisodesList";
import { episodesURL } from "../../usage/fetchData/urls";
import SingleEpisode from "./singleEpisode";

import "./_episodes.scss";
import CustomError from "../errors/errors";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [scrollY_position, setScrollY_position] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isLoading, error, isFetching } = useQuery(
    "episodes" + page,
    () => fetchEpisodes(episodesURL + page),
    {
      enabled: true,
      onUnmount: (data) => {
        if (data.cancel) {
          data.cancel();
        }
      },
    }
  );

  console.log(data);
  useEffect(() => {
    if (data !== undefined) {
      if (page === 1) {
        setEpisodes(data.results);
      } else {
        setEpisodes((prev) => [...prev, ...data.results]);
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
      if (data.info.next) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoadingMore]);

  if (isLoading) {
    return <h1>is Loading...</h1>;
  }
  if (error) {
    return <CustomError error={error} />;
  }
  return (
    <div className="episodes_parrent">
      <div className="episodes">
        {episodes.map((ep, index) => (
          <SingleEpisode key={index} episode={ep} />
        ))}
      </div>
    </div>
  );
}

export default Episodes;
