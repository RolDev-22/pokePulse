import { useContext } from "react";
import { Header } from "@layout/Header/Header";
import { Card } from "@components/ui/Card/Card";
import { Load } from "@components/ui/Load/Load";
import { Message } from "@components/ui/Message/Message";
import { usePokemonByName } from "@hooks/usePokemonByName";
import { usePokemonByRegion } from "@hooks/usePokemonByRegion";
import { SearchValueContext } from "@context/searchValueContext ";

function App() {
  const { searchValue } = useContext(SearchValueContext);
  let checkSend = "is name";

  if (!searchValue) {
    checkSend = "nulo";
  } else if (searchValue.includes("http")) {
    checkSend = "is url";
  }

  const { pokeInfo, pokeLoad, pokeErr } = usePokemonByName(
    checkSend === "is name" ? searchValue : "",
  );

  const { infoPokedex, loadPokedex, errPokedex } = usePokemonByRegion(
    checkSend === "is url" ? searchValue : "",
  );

  const currentError = pokeErr || errPokedex;
  const currentLoad = pokeLoad || loadPokedex;

  return (
    <div className="d-flex flex-column">
      <Header />
      <Load actuator={currentLoad} />
      <Message key={searchValue} message={currentError} />

      {infoPokedex &&
        infoPokedex?.pokedexes?.map((pkx) => (
          <p key={pkx.url}>{`Pokedex: ${pkx.name} - URL: ${pkx.url}`}</p>
        ))}

      <div className="sharedPadding p-2 d-flex flex-flex-wrap justify-content-center align-items-start">
        {pokeInfo && <Card data={pokeInfo} />}
      </div>
    </div>
  );
}

export default App;
