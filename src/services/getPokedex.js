import storage from "@/utils/storage";

const BS_URL = import.meta.env.VITE_BASEURL;

export async function getPokedex(regionName) {
  if (!BS_URL) {
    throw new Error("Url Base no definido");
  }

  if (storage.get(regionName)) {
    return storage.get(regionName);
  }

  try {
    const response = await fetch(`${BS_URL}/region/${regionName}`);

    if (!response.ok) {
      throw new Error("Fallo en fetch de la API Pokedex");
    }
    const data = await response.json();
    const confirmDat = data?.pokedexes ?? [];
    const urlsPokedexes = confirmDat.map((url) => url.url);

    storage.set(regionName, urlsPokedexes);

    return urlsPokedexes;
  } catch (e) {
    throw new Error("Error Base API Pokedex Info ", e);
  }
}
