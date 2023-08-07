import axios from "axios";
import {
  setCharacters,
  setCharError,
  setIsCharloadingTrue,
} from "../redux/reducers/characterReducers";

const fetchCharactersList = async (url, dispatch) => {
  try {
    dispatch(setIsCharloadingTrue());
    const response = await axios.get(url);

    dispatch(setCharacters(response.data));
  } catch (error) {
    dispatch(setCharError(error));
  }
};

export default fetchCharactersList;
