import { useState, useEffect } from "react";
import { getPokedex } from "@services/getPokedex";
import { getInfoPokedex } from "@/services/getInfoPokedex";

export const usePokeByRagion = ({ regionName }) => {
  const [pokedexInfo, setPokedexInfo] = useState([]);
  const [loadInfoPokedex, setLoadInfoPokedex] = useState(false);
  const [errorPokedex, setErrorPokedex] = useState(null);

  function restorFunction() {
    setPokedexInfo([]);
    setLoadInfoPokedex(false);
    setErrorPokedex(null);
  }

  useEffect(() => {
    if (!regionName) {
      restorFunction();
      return;
    }

    async function getPokesByRegion() {
      try {
        restorFunction();

        //Obtenemos las urls de los pokedex asociados a la region buscada
        const urlData = await getPokedex(regionName);

        //Obtenemos los pokemones de cada pokedex
        const pokemonsData = await getInfoPokedex(urlData, regionName);

        setPokedexInfo(pokemonsData);
      } catch (e) {
        setErrorPokedex(e.message);
      } finally {
        setLoadInfoPokedex(false);
      }
    }
    getPokesByRegion();
  }, [regionName]);

  return { pokedexInfo, loadInfoPokedex, errorPokedex };
};
