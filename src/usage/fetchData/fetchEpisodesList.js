import axios from "axios";
import {
  setEpisodeError,
  setEpisodeIsLoadingTrue,
  setEpisodes,
} from "../redux/reducers/episodeReducers";

const fetchEpisodes = async (url, dispatch) => {
  try {
    dispatch(setEpisodeIsLoadingTrue());
    const res = await axios.get(url);
    dispatch(setEpisodes(res.data));
  } catch (error) {
    dispatch(setEpisodeError(error));
  }
};

export default fetchEpisodes;
