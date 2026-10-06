const BaseUrl = import.meta.env.VITE_BASEURL;

export const getAllRegion = async () => {
  if (!BaseUrl) {
    throw new Error("Url de Api no definida");
  }
  const response = await fetch(`${BaseUrl}/region`);

  if (!response.ok) {
    throw new Error("Error al obtener regiones Pokemon");
  }

  const data = await response.json();
  return data.results;
};
