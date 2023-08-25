import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import fetchLocations from "../../usage/fetchData/fetchLocationsList";
import { locationsURL } from "../../usage/fetchData/urls";
import CustomError from "../errors/errors";
import CustomLoading from "../loading/loadings";
import SingleLocation from "./singleLocation";
import "./_locations.scss";
import {
  nextLocationPage,
  prevLocationPage,
} from "../../usage/redux/reducers/locationReducers";
import Buttons from "../buttons/buttons";

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
      <div className="loc_parrent">
        <div className="locations">
          {locations.results.map((loc) => (
            <SingleLocation key={loc.id} location={loc} />
          ))}
        </div>
        <Buttons
          page={page}
          nextPageHandle={() => dispatch(nextLocationPage())}
          prevPageHandle={() => dispatch(prevLocationPage())}
          prevInfo={locations.info.prev}
          nextInfo={locations.info.next}
        />
      </div>
    )
  );
}

export default Locations;
