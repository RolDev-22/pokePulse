import style from "./Message.module.css";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { useState, useEffect } from "react";

export const Message = ({ message }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [message]);

  return (
    message && (
      <div
        className={`user-select-none ${style.container}  ${
          isActive ? style.active : ""
        }`}>
        <span
          onClick={() => setIsActive(false)}
          className={`${style.btnStyle}`}>
          <FaWindowClose color="red" size={24} />
        </span>

        <p className={`p-1 m-0 mt-4  ${style.pStyle}`}>
          <MdOutlineCatchingPokemon color="red" size={32} /> {message}
        </p>
      </div>
    )
  );
};
