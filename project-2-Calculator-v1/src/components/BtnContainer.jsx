import css from "./BtnContainer.module.css";
const btnNames = ['C','CE','BS','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','+/-','=']
const BtnContainer = () => {
  return (
    <div className={`${css.myRow}`}>
        {btnNames.map((btnName) =>{ return <button>{btnName}</button>})}
      
     
    </div>
  );
};
export default BtnContainer;
