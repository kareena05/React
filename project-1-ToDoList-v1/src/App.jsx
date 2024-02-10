import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";

function App() {
  return (
    <center className="container todo-container">
      <AppName/>
      <AddToDo/>
      <div className="items-container">
      <div className="row my-row item-row">
        <div className="col-4">
          <p className="lead">Buy Noodles</p>
        </div>
        <div className="col-4">
          09/02/2024
        </div>
        <div className="col-2">
          <button className="btn btn-danger my-button">Delete</button>
        </div>
      </div>
      </div>
    </center>
  );
}

export default App;
