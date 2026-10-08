import storage from "@/utils/storage";

const BS_URL = import.meta.env.VITE_BASEURL;

export async function getPokedex(regionName) {
  if (!BS_URL) {
    //Validamos la url base
    throw new Error("Url Base no definido");
  }

  if (storage.get(regionName)) {
    //verificamos si los datos deseados ya han sido buscados
    return storage.get(regionName);
  }

  try {
    //realizamos el llamado a la API
    const data = await fetch(`${BS_URL}/region/${regionName}`);

    if (!data.ok) {
      throw new Error("Fallo en fetch de la API Pokedex");
    }
    const response = await data.json(); //convertimos los datos a JSON

    //Extraemos las urls de los pokedex asociados a cada region
    const urlsPokedexes = response?.pokedexes?.map((url) => url?.url);

    //Guardamos los datos en el storage
    storage.set(regionName, urlsPokedexes);

    return urlsPokedexes;
  } catch (e) {
    throw new Error("Error Base API Pokedex Info ", e);
  }
}
