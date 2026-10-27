import { useEffect, useState } from "react";
import { getPokemonCard } from "@/services/getPokemonCard";

export const usePokeByName = (params) => {
  const [cardInfo, setCardInfo] = useState({});
  const [cardLoad, setCardLoad] = useState(false);
  const [cardMess, setCardMess] = useState(null);

  function restorFunction() {
    setCardInfo({});
    setCardLoad(false);
    setCardMess(null);
  }

  const name = params?.name;

  useEffect(() => {
    if (!name) {
      restorFunction();
      return;
    }

    let isMounted = true;

    async function getCardInfo() {
      try {
        setCardLoad(true);
        setCardMess(null);
        const dataToCard = await getPokemonCard(name, 1);

        if (isMounted) {
          setCardInfo(dataToCard);
        }
      } catch (e) {
        if (isMounted) {
          setCardMess(e.message);
        }
      } finally {
        if (isMounted) {
          setCardLoad(false);
        }
      }
    }
    getCardInfo();
    return () => {
      isMounted = false;
    };
  }, [name]);

  return { cardInfo, cardLoad, cardMess };
};
