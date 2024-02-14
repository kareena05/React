import { useSelector } from "react-redux";

const DisplayCounter=()=>{
    const counter = useSelector((state) => state.counter);
    return (<>
     <p className="card-text">
            Counter current value: <span>{counter}</span>
          </p>
    </>);
}
export default DisplayCounter;