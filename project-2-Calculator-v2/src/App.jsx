
import css from "./app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";
function App() {
 
  const [calValue,setCalValue] = useState("");
  function HandleBtnClick(btnName){
    console.log(btnName);
    if(btnName == "C" || btnName=="CE"){
      setCalValue("");
    }
    else if(btnName == "BS"){
      const newfinal = calValue.slice(0,calValue.length-1);
      setCalValue(newfinal);
    }
    else if (btnName == "="){
        const result = eval(calValue);
        setCalValue(result);
    }else{
      const newValue = calValue+ btnName;
      setCalValue(newValue);
    }
  }
  return (
    <>
    <h1 className={`${css.heading} text-center` }>Calculator</h1>
      <div className={`${css.calculatorContainer}` }>
        <Display displayValue={calValue}></Display>
       <BtnContainer BtnClickHandler={HandleBtnClick}></BtnContainer>
      </div>
    </>
  )
}

export default App
