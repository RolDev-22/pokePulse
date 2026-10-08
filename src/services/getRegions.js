const BS_URL = import.meta.env.VITE_BASEURL;
import storage from "@utils/storage";

export async function getRegions() {
  if (!BS_URL) {
    throw new Error("Url Base no definido");
  }

  if (storage.get("regionsName")) {
    return storage.get("regionsName");
  }

  try {
    const data = await fetch(`${BS_URL}/region/`);

    if (!data.ok) {
      throw new Error("Fallo en fetch de la API Regions");
    }

    const response = await data.json();
    const confirmData = response?.results ?? [];
    const nameRegion = confirmData.map((nr) => nr.name);
    storage.set("regionsName", nameRegion);

    return nameRegion;
  } catch (e) {
    throw new Error("Error Base API: ", e);
  }
}
