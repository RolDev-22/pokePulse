import { Header } from "@layout/Header/Header";

import { Load } from "@components/ui/Load/Load";
import { Message } from "@components/ui/Message/Message";

function App() {
  return (
    <div className="d-flex flex-column position-relative">
      <Header />
      <Load />
      <Message />

      <setcion className="pbStyle">1</setcion>
      <setcion className="pbStyle">2</setcion>
      <setcion className="pbStyle">3</setcion>
      <setcion className="pbStyle">4</setcion>
      <setcion className="pbStyle">5</setcion>
    </div>
  );
}

export default App;
