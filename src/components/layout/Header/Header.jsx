import { Navbar } from "./Nav/Navbar";

export const Header = () => {
  return (
    <header
      className={`d-flex flex-column p-1 col-12 justify-content-center align-items-center`}>
      <div className="d-flex flex-column p-2 col-11 justify-content-center align-items-center">
        <h1 className="sharedFont">PokePlus</h1>
        <Navbar />
      </div>
    </header>
  );
};
