import { useContext } from "react";
import { Header } from "@layout/Header/Header";
import { Load } from "@components/ui/Load/Load";
import { Message } from "@components/ui/Message/Message";
import { SearchValueContext } from "@context/searchValueContext ";

function App() {
  const { searchValue } = useContext(SearchValueContext);

  return (
    <div className="hightValue d-flex flex-column position-relative">
      <Header />
      <Load actuator={false} />
      <Message message={""} />
      {searchValue && <p>Valor Buscado {searchValue}</p>}
    </div>
  );
}

export default App;
