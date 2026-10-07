import style from "./Load.module.css";

export const Load = ({ actuator }) => {
  return (
    <section className={`${style.mainContainer} ${actuator && style.active}`}>
      <div className={`${style.spinner}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
