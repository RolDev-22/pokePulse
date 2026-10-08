const BS_URL = import.meta.env.VITE_BASEURL;
import storage from "@utils/storage";

export async function getRegions() {
  if (!BS_URL) {
    //verificamos que la base url este creada
    throw new Error("Url Base no definido");
  }

  if (storage.get("regionsName")) {
    //verficamos que los datos a buscar no se hayan almacenado anteriormente
    return storage.get("regionsName");
  }

  try {
    const data = await fetch(`${BS_URL}/region/`); //realizamos el llamado a la API

    if (!data.ok) {
      throw new Error("Fallo en fetch de la API Regions");
    }

    const response = await data.json(); //Convertimos los datos a JSON

    //Extraemos los nombres de las regiones o devolvemos un objeto vacio si hay fallo
    const nameRegion = response?.results?.map((nr) => nr.name || []);

    //Gardamos los datos en el storage
    storage.set("regionsName", nameRegion);

    return nameRegion;
  } catch (e) {
    throw new Error("Error Base API: ", e);
  }
}
