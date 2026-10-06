export const getByRegion = async (urlRegion) => {
  if (!urlRegion) {
    throw new Error("Url de region erronea");
  }

  const response = await fetch(`${urlRegion}`);

  if (!response.ok) {
    throw new Error("Error al extraer datos de la region buscada");
  }

  const data = await response.json();

  return {
    pokedexes:
      data.pokedexes?.map((pkx) => ({
        name: pkx.name,
        url: pkx.url,
      })) || [],
  };
};
