import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import SingleCharacter from "../characters/singleCharacter";

const fetchResidentsList = async (listURLs) => {
  try {
    const responses = await Promise.all(listURLs.map((url) => axios.get(url)));

    const apiData = responses.map((res) => res.data);
    return apiData;
  } catch (err) {
    throw new Error("Failed to fetch API list");
  }
};

function Residents({ input }) {
  const {
    data: residents,
    isLoading,
    isError,
    error,
    status,
  } = useQuery("residents", () => fetchResidentsList(input), {
    enabled: true,
    onUnmount: (data) => {
      // Cancel the ongoing query if it's still active => cleanup function
      if (data.cancel) {
        data.cancel();
      }
    },
  });
  console.log(residents)

  return (
    <div className="residents">
      {residents &&
        residents.map((resident, index) => (
          <SingleCharacter key={index} character={resident} />
        ))}
    </div>
  );
}

export default Residents;
