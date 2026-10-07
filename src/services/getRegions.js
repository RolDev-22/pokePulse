const BS_URL = import.meta.env.VITE_BASEURL;
import storage from "@utils/storage";

export async function getRegions(limit = 20, offset = 0) {
  if (!BS_URL) {
    throw new Error("Url Base no definido");
  }

  if (storage.get("regionsData")) {
    return storage.get("regionsData");
  }

  try {
    const response = await fetch(
      `${BS_URL}/region/?limit=${limit}&offset=${offset}`,
    );

    if (!response.ok) {
      throw new Error("Fallo en fetch de la API");
    }

    const data = await response.json();
    storage.set("regionsData", data.results);
    return data.results;
  } catch (e) {
    throw new Error("Error Base API: ", e);
  }
}
