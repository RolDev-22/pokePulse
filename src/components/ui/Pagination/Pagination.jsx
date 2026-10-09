import { useState, useContext, useEffect } from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { SearchValueContext } from "@/context/searchValueContext ";

import style from "./Pagination.module.css";

export const Pagination = ({ datos }) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const { searchValue } = useContext(SearchValueContext);

  useEffect(() => {
    setPaginaActual(1);
  }, [searchValue]);

  const elementosPorPagina = 12;
  const totalPaginas = Math.ceil(datos.length / elementosPorPagina);

  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const elementosActuales = datos.slice(
    indiceInicial,
    indiceInicial + elementosPorPagina,
  );

  const cambiarPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaActual(pagina);
    }
  };

  const obtenerPaginasVisibles = () => {
    const delta = 1; // Cuántas páginas mostrar a la izquierda y derecha de la actual
    const rango = [];
    const rangoConPuntos = [];

    for (
      let i = Math.max(2, paginaActual - delta);
      i <= Math.min(totalPaginas - 1, paginaActual + delta);
      i++
    ) {
      rango.push(i);
    }

    if (paginaActual - delta > 2) {
      rangoConPuntos.push(1, "...");
    } else {
      rangoConPuntos.push(1);
    }

    rangoConPuntos.push(...rango);

    if (paginaActual + delta < totalPaginas - 1) {
      rangoConPuntos.push("...", totalPaginas);
    } else if (totalPaginas > 1) {
      rangoConPuntos.push(totalPaginas);
    }

    // Eliminar duplicados si totalPaginas es pequeño
    return [...new Set(rangoConPuntos)];
  };

  return (
    <div className={`${style.Container} p-2 `}>
      <div
        className={`${style.contFix} d-flex justify-content-center container-fluid justify-content-center align-items-center`}>
        <div className={`${style.paginCont}`}>
          <button
            className={`${style.btnMain}`}
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}>
            <RxDoubleArrowLeft />
          </button>

          {obtenerPaginasVisibles().map((pagina, index) => {
            if (pagina === "...") {
              return (
                <span key={`puntos-${index}`} style={{ margin: "0 5px" }}>
                  ...
                </span>
              );
            }

            return (
              <button
                key={pagina}
                onClick={() => cambiarPagina(pagina)}
                className={`${style.pagButton}`}
                style={{
                  fontWeight: pagina === paginaActual ? "bolder" : "normal",
                  background:
                    pagina === paginaActual ? "var(--cl6)" : "honeydew",
                  color: pagina === paginaActual ? "honeydew" : "var(--cl1)",
                }}>
                {pagina}
              </button>
            );
          })}

          <button
            className={`${style.btnMain}`}
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}>
            <RxDoubleArrowRight />
          </button>
        </div>
      </div>

      <ul className="p-0 d-flex flex-wrap gap-3 justify-content-center">
        {elementosActuales.map((nombrePokemon, index) => (
          // Usamos el índice o el nombre mismo como key si es único

          <li className={`${style.Card}`} key={nombrePokemon || index}>
            {nombrePokemon}
          </li>
        ))}
      </ul>
    </div>
  );
};
