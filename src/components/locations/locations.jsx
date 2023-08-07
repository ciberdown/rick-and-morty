import React from "react";
import { isError, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import fetchLocations from "../../usage/fetchData/fetchLocationsList";
import { locationsURL } from "../../usage/fetchData/urls";
import CustomError from "../errors";
import CustomLoading from "../loadings";
import SingleLocation from "./singleLocation";
import {
  nextLocationPage,
  prevLocationPage,
} from "../../usage/redux/reducers/locationReducers";

function Locations() {
  const dispatch = useDispatch();
  const { locations, error, isLoading, page } = useSelector(
    (state) => state.locations
  );

  useQuery(
    "locations" + page,
    () => fetchLocations(locationsURL + page, dispatch),
    {
      enabled: true,
      onUnmount: (data) => {
        if (data.cancel) {
          data.cancel();
        }
      },
    }
  );

  if (error) {
    return <CustomError error={error} />;
  }
  if (isLoading) {
    return <CustomLoading />;
  }

  return (
    locations && (
      <>
        <div className="locations">
          {locations.results.map((loc) => (
            <SingleLocation key={loc.id} location={loc} />
          ))}
        </div>

        <button
          disabled={!locations.info.prev}
          onClick={() => dispatch(prevLocationPage())}
        >
          prev
        </button>
        <button
          disabled={!locations.info.next}
          onClick={() => dispatch(nextLocationPage())}
        >
          next
        </button>
      </>
    )
  );
}

export default Locations;
