import axios from "axios";

const fetchEpisodes = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("episodes loading error");
  }
};

export default fetchEpisodes;
