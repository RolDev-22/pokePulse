const BS_URL = import.meta.env.VITE_BASEURL;
const defaultImg = "/pk_dflt.jpg";

export async function getPokemonCard(data, use) {
  if (!data) {
    throw new Error("Nombre O array invalido");
  }

  try {
    if (use == 1) {
      const response = await fetch(`${BS_URL}/pokemon/${data}`);
      if (!response.ok) {
        throw new Error("Error al extraer dato pokemon");
      }
      const parseDat = await response.json();
      const urlToSpecies = parseDat.species?.url;

      const categoryPokemon = await getCategory(urlToSpecies);

      return {
        id: parseDat.id,
        name: parseDat.name,
        experience: parseDat.base_experience,
        height: parseDat.height,
        weight: parseDat.weight,
        normalImg: parseDat.sprites?.other?.home?.front_default || defaultImg,
        shinyImg: parseDat.sprites?.other?.home?.front_shiny || defaultImg,
        types: parseDat.types?.map((t) => t.type.name) || [],
        category: categoryPokemon,
      };
    }
  } catch (e) {
    throw new Error("Nombre no registrado en Base de Servidor ", e);
  }
}

async function getCategory(urlCategory) {
  if (!urlCategory) {
    throw new Error("Error al obtener la categoria");
  }

  try {
    const promisse = await fetch(urlCategory);
    if (!promisse.ok) {
      throw new Error("Respuesta de categoria no valida");
    }
    const parseDta = await promisse.json();

    return parseDta.genera[5]?.genus;
  } catch (e) {
    throw new Error("Error en fetch de categoria", e);
  }
}
