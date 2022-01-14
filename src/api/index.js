import axios from "axios";
import { useCallback, useState } from "react";

export const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const resp = await axios.request(requestConfig);
      const data = await resp.data;
      console.log(data);
      applyData(data);
    } catch (err) {
      console.log(err.message || "Something went wrong");
      setError(err);
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export const getData = async (name) => {
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: name.toLowerCase() },
    headers: {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "92218ad753mshdd417b9519712bdp1032d7jsna3bc285e5004",
    },
  };

  try {
    if (name.trim() !== "") {
      const resp = await axios.request(options);
      const data = await resp.data;
      const {
        //PROCNT , FAT, CHOCDF
        ENERC_KCAL: cals,
        PROCNT: protein,
        CHOCDF: carbs,
        FAT: fat,
      } = await data.hints[0].food.nutrients;

      console.log(cals);
      return {
        cals,
        protein,
        carbs,
        fat,
      };
    }
  } catch (err) {
    return err;
  }
};
