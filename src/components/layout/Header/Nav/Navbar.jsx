import { useContext, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { SiSearxng } from "react-icons/si";
import { useRegion } from "@/hooks/useRegions";
/* import { SearchByNameContext } from "@context/searchByNameContext.jsx";
import { SearchByRegionContext } from "@context/searchByRegionContext.jsx"; */
import { SearchValueContext } from "@context/searchValueContext .jsx";

export const Navbar = () => {
  const refToForm = useRef(null);
  const refToInput = useRef(null);
  const [localName, setLocalName] = useState(null);

  const { regions, regLoad, regErr } = useRegion();
  /*   const { setSearchByName } = useContext(SearchByNameContext);
  const { setSearchByRegion } = useContext(SearchByRegionContext); */
  const { setSearchValue } = useContext(SearchValueContext);

  function resetValue() {
    setSearchValue(null);
    setLocalName(null);
  }

  const handleSetUrl = (name, url) => {
    refToInput.current.value = name.toUpperCase();
    setSearchValue(url);
    setLocalName(name);
  };

  const handleSetSearch = (e) => {
    e.preventDefault();

    const valueOfName = refToInput.current.value.toLowerCase().trim();

    if (!valueOfName) {
      setSearchValue("");
      return;
    }

    const matched = regions.find((rg) => rg.name === valueOfName);

    if (matched) {
      setSearchValue(matched.url);
    } else {
      setSearchValue(valueOfName);
    }
  };

  return (
    <nav
      className={`${styles.navStyle} d-flex flex-column col-12 p-1 rounded-4 justify-content-center align-items-center`}>
      <ul className="p-0 m-0 d-flex flex-wrap gap-1 gap-lg-2 col-12 justify-content-center align-items-center">
        {regLoad && <p>Cargando Región...</p>}
        {regErr && <p className="text-warning sharedFont fs-5">⚠️ {regErr}</p>}

        {regions &&
          regions.map((region) => {
            const isActive = localName === region.name;
            return (
              <li
                key={region.url}
                className={`${styles.tagStyle} ${isActive ? styles.active : ""} p-1 text-capitalize user-select-none`}
                style={{ display: region.name === "orre" ? "none" : "block" }}
                onClick={() => handleSetUrl(region.name, region.url)}>
                {region.name}
              </li>
            );
          })}
      </ul>

      <div className={`container-fluid p-1`}>
        <form
          onSubmit={handleSetSearch}
          ref={refToForm}
          className="d-flex justify-content-center align-items-center p-1 gap-1 gap-md-2 "
          role="search">
          <input
            ref={refToInput}
            className={`${styles.inputSearchStyle} col-10 col-md-5`}
            type="search"
            autoComplete="off"
            placeholder="Escribe región, número o nombre"
            aria-label="Search"
            onChange={(e) => setLocalName(e.target.value.toLowerCase())}
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
