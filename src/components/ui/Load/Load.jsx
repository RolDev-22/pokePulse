import style from "./Load.module.css";

export const Load = ({ actuator }) => {
  return (
    <section className={`${actuator && style.active} ${style.container}`}>
      <div className={`${style.spinner}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
