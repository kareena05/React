import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counterSlicer";
import { privacyActions } from "../store/privacySlicer";

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(0);
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAddition = () => {
    dispatch(counterActions.add({ num: inputRef.current.value }));
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputRef.current.value));
  };
  return (
    <>
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
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Num"
          className="num-input"
        />

        <button className="btn btn-info" onClick={handleAddition}>
          Add
        </button>
        <button className="btn btn-warning" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
