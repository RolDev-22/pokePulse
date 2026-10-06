import { useEffect, useState } from "react";
import { getByRegion } from "@/services/getByRegion";

export function usePokemonByRegion(urlRegion) {
  const [infoPokedex, setInfoPokedex] = useState(null);
  const [loadPokedex, setLoadPokedex] = useState(false);
  const [errPokedex, setErrPokedex] = useState(null);

  useEffect(() => {
    if (!urlRegion) {
      setInfoPokedex((prev) => (prev !== null ? null : prev));
      setLoadPokedex((prev) => (prev !== false ? false : prev));
      setErrPokedex((prev) => (prev !== null ? null : prev));
      return;
    }

    async function fetchRegionBySelect() {
      try {
        /* Receteamos valores anteriores obtenidos*/
        setLoadPokedex(true);
        setErrPokedex(null);

        /* Empleamos el llamado desde la API */
        const data = await getByRegion(urlRegion);

        setInfoPokedex(data);
      } catch (error) {
        setErrPokedex(error.message);
      } finally {
        setLoadPokedex(false);
      }
    }
    fetchRegionBySelect();
  }, [urlRegion]);
  return { infoPokedex, loadPokedex, errPokedex };
}
