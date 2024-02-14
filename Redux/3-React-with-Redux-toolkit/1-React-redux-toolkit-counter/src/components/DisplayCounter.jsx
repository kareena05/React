import { useSelector } from "react-redux";

const DisplayCounter=()=>{
    const {counterVal} = useSelector((state) => state.counter);
    //counter in state.counter is the name of slice's name property 
    return (<>
     <p className="card-text">
            Counter current value: <span>{counterVal}</span>
          </p>
    </>);
}
export default DisplayCounter;