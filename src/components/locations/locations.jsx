import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchLocations from "../../usage/fetchData/fetchLocationsList";
import { locationsURL } from "../../usage/fetchData/urls";
import CustomError from "../errors/errors";
import CustomLoading from "../loading/loadings";
import SingleLocation from "./singleLocation";
import "./_locations.scss";
import { Box, LinearProgress } from "@mui/material";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false); // Add loading indicator state
  const [scrollY_position, setScrollY_position] = useState(null);

  const { data, error, isLoading, isFetching } = useQuery(
    "locations" + page,
    () => fetchLocations(locationsURL + page),
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
        setLocations(data.results);
      } else {
        setLocations((prev) => [...prev, ...data.results]);
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

  if (error) {
    return <CustomError error={error} />;
  }
  if (isLoading) {
    return <CustomLoading />;
  }

  return (
    <div className="loc_parrent">
      <div className="locations">
        {locations.map((loc, index) => (
          <SingleLocation key={index} location={loc} />
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

export default Locations;
