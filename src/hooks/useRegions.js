import { useEffect, useState } from "react";
import { getRegions } from "@services/getRegions";

export const useRegions = () => {
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(true);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        //Limpiamos cargas anteriores
        setLoadData(true);
        setErrorData(null);

        //Intentamos el llamado al servicio
        const dataGet = await getRegions();
        setData(dataGet);
      } catch (e) {
        setErrorData(e.message);
      } finally {
        setLoadData(false);
      }
    }
    getData();
  }, []);

  return { data, loadData, errorData };
};
