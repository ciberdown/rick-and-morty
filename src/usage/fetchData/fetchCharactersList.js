import axios from "axios";

const fetchCharactersList = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default fetchCharactersList;
