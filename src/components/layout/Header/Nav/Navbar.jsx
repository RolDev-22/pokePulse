import styles from "./Navbar.module.css";
import { SiSearxng } from "react-icons/si";

export const Navbar = () => {
  return (
    <nav
      className={`${styles.navStyle}  z-3 d-flex flex-column col-12 p-1 rounded-4 justify-content-center align-items-center mt-5 mt-md-3`}>
      <ul className="p-0 m-0 d-flex flex-wrap gap-1 gap-lg-2 col-12 justify-content-center align-items-center"></ul>

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
