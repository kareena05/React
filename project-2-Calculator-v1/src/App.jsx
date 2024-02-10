
import css from "./app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
function App() {
 

  return (
    <>
    <h1 className={`${css.heading} text-center` }>Calculator</h1>
      <div className={`${css.calculatorContainer}` }>
        <Display></Display>
       <BtnContainer></BtnContainer>
      </div>
    </>
  )
}

export default App
