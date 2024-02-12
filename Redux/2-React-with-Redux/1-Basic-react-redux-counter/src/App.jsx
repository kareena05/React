import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "./components/Container";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  return (
    <>
    <Container>
          <div className="card-body">
            <h5 className="card-title">Counter</h5>
            <p className="card-text">
              Counter current value: <span>{counter}</span>
            </p>
            <button  className="btn btn-primary">
              +1
            </button>
            <button  className="btn btn-success">
              -1
            </button>
          </div>
          </Container>
    </>
  );
}

export default App;
