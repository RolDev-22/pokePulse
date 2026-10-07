import styles from "./Navbar.module.css";
import { SiSearxng } from "react-icons/si";

export const Navbar = () => {
  return (
    <nav
      className={`${styles.navStyle} d-flex m-0 p-0 flex-column col-12 p-1 rounded-4 justify-content-center align-items-center`}>
      <ul className="p-0 m-0 d-flex flex-wrap gap-1 gap-lg-2 col-12 justify-content-center align-items-center">
        <li className={`${styles.tagStyle}`}>Kanto</li>
        <li className={`${styles.tagStyle}`}>Johto</li>
        <li className={`${styles.tagStyle}`}>Hoenn</li>
        <li className={`${styles.tagStyle}`}>Sinnoh</li>
        <li className={`${styles.tagStyle}`}>Unova</li>
        <li className={`${styles.tagStyle}`}>Kalos</li>
        <li className={`${styles.tagStyle}`}>Alola</li>
        <li className={`${styles.tagStyle}`}>Galar</li>
        <li className={`${styles.tagStyle}`}>Hisui</li>
        <li className={`${styles.tagStyle}`}>Paldea</li>
      </ul>

      <div className={`container-fluid p-1`}>
        <form
          className="d-flex justify-content-center align-items-center p-1 gap-1 gap-md-2 "
          role="search">
          <input
            className={`${styles.inputSearchStyle} col-10 col-md-5`}
            type="search"
            autoComplete="off"
            placeholder="Escribe región, número o nombre"
            aria-label="Search"
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
