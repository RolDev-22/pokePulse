import { useState } from "react";
import styles from "./Card.module.css";
import { SiIconfinder } from "react-icons/si";
import { FaWeightScale } from "react-icons/fa6";
import { FaRulerVertical } from "react-icons/fa";

// 1. Creamos un componente individual para cada tarjeta
const CardItem = ({ dt }) => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <article
      key={dt.id}
      className={`${styles.cardStyle} user-select-none d-flex flex-column p-2 col-10 col-md-5 col-lg-3 text-capitalize text-light`}>
      <section className="d-flex flex-column p-1 w-100">
        <h6
          className={`${styles.cardTitle} d-flex flex-row justify-content-between align-items-center p-1 m-0`}>
          #00{dt.id} | {dt.category}
        </h6>
        <article className="p-1 container d-flex flex-md-row ">
          <p className="m-0 w-50">{dt.name}</p>
          {dt.types.map((tp, index) => (
            <span
              key={index}
              className="d-flex flex-grow-1 text-center justify-content-end align-items-center p-1">
              <span className={`${styles.itemStyle}`}>
                <SiIconfinder /> {tp}
              </span>
            </span>
          ))}
        </article>
      </section>

      <section className="d-flex flex-column justify-content-between align-items-center p-0 m-0">
        <div className="w-100 p-1 d-flex flex-row justify-content-between align-items-center">
          <label className="p-0 m-0">Activar Shinny</label>
          <label className={`${styles.switch} m-0 p-0`}>
            <input
              checked={isShiny}
              onChange={(e) => setIsShiny(e.target.checked)}
              type="checkbox"
              className={`${styles.checkbox} m-0 p-0`}
            />
            <span className={`${styles.slider} m-0 p-0`}></span>
            <span className={`${styles.knob} m-0 p-0`}></span>
          </label>
        </div>
        <section className="w-100 d-flex flex-column flex-md-row p-1 gap-1 justify-content-center align-items-center align-items-md-stretch">
          <figure className={`${styles.figureStyle} p-0 m-0`}>
            <div className="overflow-hidden position-relative">
              <p className="textShared position-absolute px-2">
                PS
                <span className="fs-3"> {dt.experience}</span>
              </p>
              {dt.normalImg && (
                <img
                  className="img-fluid"
                  src={isShiny ? dt.shinyImg : dt.normalImg}
                  alt={dt.name}
                />
              )}
            </div>
          </figure>

          <article className="w-100 d-flex flex-row flex-md-column flex-grow-1 gap-1 justify-content-around align-items-center">
            <div className="rounded-3 gap-2 gap-md-5 textShared w-75 text-center d-flex justify-content-center align-items-center">
              <figure className="m-0 p-1 d-flex justify-content-center align-items-center">
                <FaRulerVertical size={32} />
              </figure>
              <div className="m-0 p-0 text-start">
                <p className="m-0 p-0">Height</p>
                {dt.height}
              </div>
            </div>
            <div className="rounded-3 gap-2 gap-md-5 textShared w-75 d-flex text-center justify-content-center align-items-center">
              <figure className="m-0 p-1 d-flex justify-content-center align-items-center">
                <FaWeightScale size={32} />
              </figure>
              <div className="m-0 p-0 text-start">
                <p className="m-0 p-0">Weight</p>
                {dt.weight}
              </div>
            </div>
          </article>
        </section>
      </section>
    </article>
  );
};

// 2. Componente principal que mapea los datos
export const Card = ({ data = [] }) => {
  return <>{data && data.map((dt) => <CardItem key={dt.id} dt={dt} />)}</>;
};
