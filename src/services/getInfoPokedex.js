import storage from "@/utils/storage";

export async function getInfoPokedex(urls, regionName) {
  if (!urls && !regionName) {
    throw new Error("Datos de urls perdidos");
  }

  if (storage.get(`${regionName}_ent`)) {
    return storage.get(`${regionName}_ent`);
  }

  try {
    const response = await Promise.all(urls.map((u) => fetch(u)));

    for (const res of response) {
      if (!res.ok) {
        throw new Error(`Error en la peticion a ${res.url}`);
      }
    }
    const data = await Promise.all(response.map((res) => res.json()));

    const allNames = data.flatMap(
      (res) =>
        res?.pokemon_entries?.map((entry) => entry.pokemon_species.name) || [],
    );

    const sinDuplicados = [...new Set(allNames)];

    storage.set(`${regionName}_ent`, sinDuplicados);

    return sinDuplicados;
  } catch (e) {
    throw new Error("Problemas al extraer datos de los pokedex ", e);
  }
}
