import { useContext, useRef, useState } from "react";
import { SiSearxng } from "react-icons/si";
import styles from "./Navbar.module.css";
import { useRegions } from "@hooks/useRegions";
import { SearchValueContext } from "@context/searchValueContext ";

export const Navbar = () => {
  const { data, loadData, errorData } = useRegions();
  const { setSearchValue } = useContext(SearchValueContext);
  const refToSearchInput = useRef(null);
  const [localValue, setLocalValue] = useState(null);

  function handleSearch(name) {
    refToSearchInput.current.value = name;
    setSearchValue(name);
    setLocalValue(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const actualValue = refToSearchInput.current.value;

    const match = data?.find((dt) => actualValue === dt.name);

    if (match) {
      setSearchValue(match.name);
      setLocalValue(match.name);
    } else {
      setSearchValue(actualValue);
    }
  }

  return (
    <nav
      className={`${styles.navStyle} d-flex m-0 p-0 flex-column col-12 p-1 rounded-4 justify-content-center align-items-center`}>
      <ul className="p-0 m-0 d-flex flex-wrap gap-1 gap-lg-2 col-12 justify-content-center align-items-center">
        {loadData && <p className="text-warning fs-3">Cargando Regiones ...</p>}
        {errorData && <p className="text-warning fs-3">{errorData}</p>}

        {data &&
          data
            .filter((dt) => dt.name !== "orre")
            .map((dt) => (
              <li
                key={dt.url}
                onClick={() => handleSearch(dt.name)}
                className={`text-capitalize ${styles.tagStyle} ${dt.name == localValue ? styles.active : ""} `}>
                {dt.name}
              </li>
            ))}
      </ul>

      <div className={`container-fluid p-1`}>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center align-items-center p-1 gap-1 gap-md-2 "
          role="search">
          <input
            className={`${styles.inputSearchStyle} col-10 col-md-5`}
            ref={refToSearchInput}
            type="search"
            autoComplete="off"
            placeholder="Escribe región, número o nombre"
            aria-label="Search"
            onChange={(e) => setLocalValue(e.target.value.toLowerCase())}
          />
          <button
            className={`${styles.btnStyle} d-flex p-1 text-center justyfy-content-center align-items-center`}
            type="submit">
            <SiSearxng size={32} />
          </button>
        </form>
      </div>
    </nav>
  );
};
