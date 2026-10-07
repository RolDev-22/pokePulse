import { Header } from "@layout/Header/Header";

import { Load } from "@components/ui/Load/Load";
import { Message } from "@components/ui/Message/Message";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Load />
      <Message />

      <div className="sharedPadding p-2 d-flex flex-wrap justify-content-center align-items-start gap-3"></div>
    </div>
  );
}

export default App;
