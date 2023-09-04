import axios from "axios";

const fetchLocations = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("locations not found!");
  }
};

export default fetchLocations;
