import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import fetchEpisodes from "../../usage/fetchData/fetchEpisodesList";
import { episodesURL } from "../../usage/fetchData/urls";
import CustomLoading from "../loading/loadings";
import CustomError from "../errors/errors";
import SingleEpisode from "./singleEpisode";
import {
  nextEpisodePage,
  prevEpisodePage,
} from "../../usage/redux/reducers/episodeReducers";

function Episodes() {
  const dispatch = useDispatch();
  const { episodes, error, page, isLoading } = useSelector(
    (state) => state.episodes
  );

  useQuery(
    "episodes" + page,
    () => {
      fetchEpisodes(episodesURL, dispatch);
    },
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
    episodes && (
      <>
        <div className="episodes">
          {episodes.results.map((ep) => (
            <SingleEpisode key={ep.id} episode={ep} />
          ))}
        </div>
        <button
          disabled={!episodes.info.prev}
          onClick={() => dispatch(prevEpisodePage())}
        >
          prev
        </button>
        <button
          disabled={!episodes.info.next}
          onClick={() => dispatch(nextEpisodePage())}
        >
          next
        </button>
      </>
    )
  );
}

export default Episodes;
