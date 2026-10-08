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
    const response = await fetch(`${BS_URL}/region/`);

    if (!response.ok) {
      throw new Error("Fallo en fetch de la API Regions");
    }

    const data = await response.json();
    const confirmData = data?.results ?? [];
    const nameRegion = confirmData.map((nr) => nr.name);
    storage.set("regionsName", nameRegion);

    return nameRegion;
  } catch (e) {
    throw new Error("Error Base API: ", e);
  }
}
