import axios from "axios";

export async function fetchdata(url) {
  const reponse = await axios.get(url);
  return reponse.data;
}
