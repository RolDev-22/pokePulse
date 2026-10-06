import { getCategory } from "@services/getCategory";
import { useEffect, useState } from "react";

export function useCategoryPokemon(urlCategory) {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;

    async function fetchPokemonCategory() {
      try {
        const data = await getCategory({ urlCategory });
        if (isMounted) {
          setCategory(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    }
    fetchPokemonCategory();
    return () => {
      isMounted = false;
    };
  }, [urlCategory]);

  return { category, error };
}
