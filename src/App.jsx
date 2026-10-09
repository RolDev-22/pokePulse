import { useContext } from "react";
import { Header } from "@layout/Header/Header";
import { Load } from "@ui/Load/Load";
import { Message } from "@ui/Message/Message";
import { Pagination } from "@ui/Pagination/Pagination";
import { SearchValueContext } from "@context/searchValueContext ";
import { usePokeByRagion } from "@hooks/usePokeByRagion";
import { useRegions } from "@hooks/useRegions";
import { MdOutlineCatchingPokemon } from "react-icons/md";

function App() {
  const { searchValue } = useContext(SearchValueContext);
  const { data } = useRegions();
  const checked = data.some((dt) => dt === searchValue);

  const { pokedexInfo, loadInfoPokedex, errorPokedex } = usePokeByRagion(
    checked && { regionName: searchValue },
  );

  const currentLoad = loadInfoPokedex;
  const currentError = errorPokedex;

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
        <>
          <Load actuator={currentLoad} />
          <Message message={currentError} />
          <Pagination datos={pokedexInfo} />
        </>
      )}
    </div>
  );
}

export default App;
