import { getByName } from "@/services/getByName";
import { useEffect, useState } from "react";

export function usePokemonByName(pokeName) {
  const [pokeInfo, setPokeInfo] = useState(null);
  const [pokeLoad, setLoading] = useState(false);
  const [pokeErr, setError] = useState(null);

  useEffect(() => {
    if (!pokeName) {
      setPokeInfo((prev) => (prev !== null ? null : prev));
      setLoading((prev) => (prev !== false ? false : prev));
      setError((prev) => (prev !== null ? null : prev));
      return;
    }

    let isMounted = true;

    async function fetchPokemonByName() {
      try {
        setLoading(true);
        setError(null);

        const data = await getByName(pokeName);

        if (isMounted) {
          setPokeInfo(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setPokeInfo(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPokemonByName();

    return () => {
      isMounted = false;
    };
  }, [pokeName]);

  return { pokeInfo, pokeLoad, pokeErr };
}
