import { useState, useEffect } from "react";
import { getAllRegion } from "@/services/getAllRegion";

export function useRegion() {
  const [regions, setRegions] = useState([]);
  const [regLoad, setLoading] = useState(true);
  const [regErr, setError] = useState(null);

  useEffect(() => {
    async function fetchRegion() {
      try {
        /* Receteamos valores anteriores obtenidos*/
        setLoading(true);
        setError(null);

        /* Empleamos el llamado desde la API */
        const data = await getAllRegion();

        /* Ingresamos los datos a la variable */
        setRegions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRegion();
  }, []);

  return { regions, regLoad, regErr };
}
