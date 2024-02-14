import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls =()=>{
    const dispatch = useDispatch();
  const inputRef = useRef(0);
    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
      };
      const handlePrivacyToggle = () => {
        dispatch({ type: "PRIVACY_TOGGLE" });
      };
      const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
      };
      const handleAddition = () => {
        dispatch({ type: "ADD",payload:{number:inputRef.current.value} });
      };
      const handleSubtract = () => {
        dispatch({ type: "SUBTRACT" ,payload:{number:inputRef.current.value}});
      };
    return (<>
         
          <button className="btn btn-primary" onClick={handleIncrement}>
            +1
          </button>
          <button className="btn btn-success" onClick={handleDecrement}>
            -1
          </button>
          <button className="btn btn-primary" onClick={handlePrivacyToggle}>
            Privacy Toggle
          </button>
          <br></br>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
         
          <input type="text" ref={inputRef} placeholder="Enter Num" className="num-input" />
          
          <button className="btn btn-info" onClick={handleAddition}>
            Add
          </button>
          <button className="btn btn-warning" onClick={handleSubtract}>
            Subtract
          </button>
            </div>
    </>)
}
export default Controls;