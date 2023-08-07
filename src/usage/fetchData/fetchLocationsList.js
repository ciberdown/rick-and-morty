import axios from "axios";
import {
  setLocationError,
  setLocationIsLoadingTrue,
  setLocations,
} from "../redux/reducers/locationReducers";

const fetchLocations = async (url, dispatch) => {
  try {
    dispatch(setLocationIsLoadingTrue());
    const res = await axios.get(url);
    dispatch(setLocations(res.data));
  } catch (error) {
    dispatch(setLocationError(error));
  }
};

export default fetchLocations;
