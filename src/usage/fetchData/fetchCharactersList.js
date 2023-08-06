import axios from "axios";
import {
  setCharacters,
  setError,
  setIsloadingTrue,
} from "../redux/reducers/characterReducers";

const fetchCharactersList = async (url, dispatch) => {
  try {
    dispatch(setIsloadingTrue());
    const response = await axios.get(url);

    dispatch(setCharacters(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export default fetchCharactersList;
