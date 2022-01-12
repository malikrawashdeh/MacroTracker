import axios from "axios";
import { useCallback } from "react";
// export const useHTTP = () => {
//   const getRequest = useCallback(async (name, applyData) => {
//     const options = {
//       method: "GET",
//       url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
//       params: { ingr: name.toLowerCase() },
//       headers: {
//         "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
//         "x-rapidapi-key": "92218ad753mshdd417b9519712bdp1032d7jsna3bc285e5004",
//       },
//     };

//     try {
//       const resp = await axios.request(options);
//       const data = await resp.data;
//       console.log(data);
//       applyData(data);
//     } catch (err) {
//       console.log(err);
//     }

//   }, []);
//   return getRequest;
// };

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
