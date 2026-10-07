import { Header } from "@layout/Header/Header";
import { Load } from "@components/ui/Load/Load";
import { Message } from "@components/ui/Message/Message";

function App() {
  return (
    <div className="hightValue d-flex flex-column position-relative">
      <Header />
      <Load actuator={false} />
      <Message message={""} />
      <div className="bg-warning p-2 d-flex flex-wrap justify-content-center gap-3">
        <div className="pbCard">1</div>
        <div className="pbCard">2</div>
        <div className="pbCard">3</div>
        <div className="pbCard">4</div>
        <div className="pbCard">5</div>
        <div className="pbCard">6</div>
        <div className="pbCard">7</div>
        <div className="pbCard">8</div>
        <div className="pbCard">9</div>
      </div>
    </div>
  );
}

export default App;
