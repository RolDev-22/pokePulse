import { useState } from "react";
import styles from "./Card.module.css";
import { useCategoryPokemon } from "@/hooks/useCategoryPokemon";
import { SiIconfinder } from "react-icons/si";
import { FaWeightScale } from "react-icons/fa6";
import { FaRulerVertical } from "react-icons/fa";

export const Card = ({ data = [] }) => {
  const [isShiny, setIsShiny] = useState(false);
  const { category, error } = useCategoryPokemon(data.species);

  return (
    <article
      className={`${styles.cardStyle} user-select-none d-flex flex-column p-2 col-10 col-md-5 col-lg-3 text-capitalize text-light`}>
      <section className="d-flex flex-column p-1 w-100">
        <h6
          className={`${styles.cardTitle} d-flex flex-row justify-content-between align-items-center p-1 m-0`}>
          #00{data.id} | {category || error}
        </h6>
        <article className="p-1 container d-flex flex-md-row ">
          <p className="m-0 w-50">{data.name}</p>
          {data.types.map((type, index) => (
            <span
              key={index}
              className={`d-flex flex-grow-1 text-center justify-content-end align-items-center p-1
              }`}>
              <span className={`${styles.itemStyle}`}>
                <SiIconfinder /> {type}
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
            <div className="overflow-hidder position-relative">
              <p className="textShared position-absolute  px-2">
                PS
                <span className="fs-3"> {data.experience}</span>
              </p>
              {data.normalImg && (
                <img
                  className="img-fluid"
                  src={isShiny ? data.shinyImg : data.normalImg}
                  alt={data.name}
                />
              )}
            </div>
          </figure>

          <article className="w-100 d-flex flex-row flex-md-column flex-grow-1 gap-1 justify-content-around align-items-center">
            <div className="rounded-3 gap-2 gap-md-5 textShared w-75 text-centerm d-flex justify-content-center align-items-center">
              <figure className="m-0 p-1 d-flex justify-content-center align-items-center">
                <FaRulerVertical size={32} />
              </figure>
              <div className="m-0 p-0 text-start">
                <p className="m-0 p-0">Height</p>
                {data.height}
              </div>
            </div>
            <div className="rounded-3 gap-2 gap-md-5 textShared w-75 d-flex text-center  justify-content-center align-items-center">
              <figure className="m-0 p-1 d-flex justify-content-center align-items-center">
                <FaWeightScale size={32} />
              </figure>
              <div className="m-0 p-0 text-start">
                <p className="m-0 p-0">Weight</p>
                {data.weight}
              </div>
            </div>
          </article>
        </section>
      </section>
    </article>
  );
};
