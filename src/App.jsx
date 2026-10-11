import { useContext } from "react";
import { Header } from "@layout/Header/Header";
import { Load } from "@ui/Load/Load";
import { Message } from "@ui/Message/Message";
import { Pagination } from "@ui/Pagination/Pagination";
import { Card } from "@ui/Card/Card";
import { SearchValueContext } from "@context/searchValueContext ";
import { useRegions } from "@hooks/useRegions";
import { usePokeByRagion } from "@hooks/usePokeByRagion";
import { usePokeByName } from "@hooks/usePokeByName";
import { MdOutlineCatchingPokemon } from "react-icons/md";

function App() {
  const { searchValue } = useContext(SearchValueContext);
  const { data } = useRegions();
  const checked = data.some((dt) => dt === searchValue);

  const { pokedexInfo, loadInfoPokedex, errorPokedex } = usePokeByRagion(
    checked ? { regionName: searchValue } : undefined,
  );

  const { cardInfo, cardLoad, cardMess } = usePokeByName(
    !checked ? { name: searchValue } : undefined,
  );

  const currentLoad = loadInfoPokedex || cardLoad;
  const currentError = errorPokedex || cardMess;

  return (
    <div className="hightValue d-flex flex-column position-relative">
      <Header />

      {!searchValue ? (
        <div className="welcome-container text-center p-5">
          <h2>
            ¡Bienvenido a la Pokédex! <MdOutlineCatchingPokemon size={32} />
          </h2>
          <p>
            Selecciona o busca una región en el menú superior para comenzar a
            explorar.
          </p>
        </div>
      ) : (
        <div className="pbStyle2">
          <Load actuator={currentLoad} />
          <Message message={currentError} />
          {!checked ? (
            <>
              <Card data={cardInfo}></Card>
            </>
          ) : (
            <Pagination datos={pokedexInfo} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
