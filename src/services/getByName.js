const BASE_URL = import.meta.env.VITE_BASEURL;
const DEFAULT_IMG = "/pk_dflt.jpg";

export const getByName = async (name) => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);

  if (!response.ok) {
    throw new Error("No se pudo acceder al pokemon");
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    experience: data.base_experience,
    height: data.height,
    weight: data.weight,
    normalImg: data.sprites?.other?.home?.front_default || `${DEFAULT_IMG}`,
    shinyImg: data.sprites?.other?.home?.front_shiny || `${DEFAULT_IMG}`,
    types: data.types.map((t) => t.type.name),
    species: data.species.url,
  };
};
