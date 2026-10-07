import { useState, useEffect } from "react";
import { getAllRegion } from "@/services/getAllRegion";

export function useRegion() {
  const [regions, setRegions] = useState([]);
  const [regLoad, setLoading] = useState(true);
  const [regErr, setError] = useState(null);

  useEffect(() => {
    async function fetchRegion() {
      try {
        setLoading(true);
        setError(null);

        const data = await getAllRegion();

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
