import storage from "@/utils/storage";

export async function getInfoPokedex(urls, regionName) {
  if (!urls && !regionName) {
    //validamos los props entrantes
    throw new Error("Datos de urls perdidos");
  }

  //verificamos si los datos deseados han sido buscados
  if (storage.get(`${regionName}_ent`)) {
    return storage.get(`${regionName}_ent`);
  }

  try {
    //realizamos promesas en simultaneo de APIS
    const response = await Promise.all(urls.map((u) => fetch(u)));

    //Verificamos que cada promesa este bajo un resultado correcto
    for (const res of response) {
      if (!res.ok) {
        throw new Error(`Error en la peticion a ${res.url}`);
      }
    }

    //Resolvemos las promesas y formateamos cada una a JSON
    const data = await Promise.all(response.map((res) => res.json()));

    //obtenemos todos los nombres de pokemones asociados por pokedex
    const allNames = data.flatMap(
      (res) =>
        res?.pokemon_entries?.map((entry) => entry.pokemon_species.name) || [],
    );

    //Eliminamos duplicados de las listas de nombres
    const sinDuplicados = [...new Set(allNames)];

    //Guardamos los datos para persistencia y rendimiento
    storage.set(`${regionName}_ent`, sinDuplicados);

    return sinDuplicados;
  } catch (e) {
    throw new Error("Problemas al extraer datos de los pokedex ", e);
  }
}
