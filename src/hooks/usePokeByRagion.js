import { useState, useEffect } from "react";
import { getPokedex } from "@services/getPokedex";
import { getInfoPokedex } from "@/services/getInfoPokedex";

export const usePokeByRagion = (params) => {
  const [pokedexInfo, setPokedexInfo] = useState([]);
  const [loadInfoPokedex, setLoadInfoPokedex] = useState(false);
  const [errorPokedex, setErrorPokedex] = useState(null);

  function restorFunction() {
    setPokedexInfo([]);
    setLoadInfoPokedex(false);
    setErrorPokedex(null);
  }

  const regionName = params?.regionName;

  useEffect(() => {
    // Si no hay región, limpiamos y salimos de inmediato
    if (!regionName) {
      restorFunction();
      return;
    }

    let isMounted = true;

    async function getPokesByRegion() {
      try {
        setErrorPokedex(null);
        setLoadInfoPokedex(true);

        // Obtenemos las urls de los pokedex asociados a la region buscada
        const urlData = await getPokedex(regionName);

        // Obtenemos los pokemones de cada pokedex
        const pokemonsData = await getInfoPokedex(urlData, regionName);

        if (isMounted) {
          setPokedexInfo(pokemonsData);
        }
      } catch (e) {
        if (isMounted) {
          setErrorPokedex(e.message);
        }
      } finally {
        if (isMounted) {
          setLoadInfoPokedex(false);
        }
      }
    }

    getPokesByRegion();

    return () => {
      isMounted = false;
    };
  }, [regionName]);

  return { pokedexInfo, loadInfoPokedex, errorPokedex };
};
