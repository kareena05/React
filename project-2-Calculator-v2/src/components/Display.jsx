import css from "./Display.module.css";
const Display = ({displayValue}) => {
  return (
    <div className={`${css.displayContainer}`}>
      <input
        className={`form-control ${css.displayInput}`}type="text" name="" id="displayInput" placeholder="98 + 2" value={displayValue}
      />
    </div>
  );
};
export default Display;
