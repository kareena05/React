import css from "./Display.module.css";
const Display = () => {
  return (
    <div className={`${css.displayContainer}`}>
      <input
        className={`form-control ${css.displayInput}`}type="text" name="" id="displayInput" placeholder="98 + 2"
      />
    </div>
  );
};
export default Display;
