import { useState } from "react";

/* const datos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  nombre: `Elemento ${i + 1}`,
})); */

export const Pagination = ({ datos }) => {
  const [paginaActual, setPaginaActual] = useState(1);

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

  return (
    <div className="pbContainer p-0 ">
      <ul className="p-0 d-flex flex-wrap gap-3 justify-content-center">
        {elementosActuales.map((nombrePokemon, index) => (
          // Usamos el índice o el nombre mismo como key si es único
          <li className="pbCard" key={nombrePokemon || index}>
            {nombrePokemon}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}>
          Anterior
        </button>

        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
          <button
            key={pagina}
            onClick={() => cambiarPagina(pagina)}
            style={{
              fontWeight: pagina === paginaActual ? "bold" : "normal",
              background: pagina === paginaActual ? "#007bff" : "#fff",
              color: pagina === paginaActual ? "#fff" : "#000",
            }}>
            {pagina}
          </button>
        ))}

        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
