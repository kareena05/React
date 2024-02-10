import css from "./BtnContainer.module.css";
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
const btnNames = ['C','CE','BS','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','+/-','=']
const BtnContainer = ({BtnClickHandler}) => {
  return (
    <div className={`${css.myRow}`}>
      <i class='fas fa-backspace'></i>
        {btnNames.map((btnName) =>{ return <button onClick={()=>BtnClickHandler(btnName)}>{btnName}</button>})}
      
     
    </div>
  );
};
export default BtnContainer;
