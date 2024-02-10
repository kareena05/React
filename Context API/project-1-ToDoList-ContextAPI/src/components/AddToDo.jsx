import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
function AddToDo({ AddToDoBtnHandler }) {
  const [todoName, setToDoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  function HandleNameChange(event) {
    setToDoName(event.target.value);
  }
  function HandleDateChange(event) {
    setDueDate(event.target.value);
  }
  function AddToDoBtnClick(event) {
    event.preventDefault();
    AddToDoBtnHandler(todoName,dueDate);
    setToDoName("");
    setDueDate("");
  }

  return (
    <div>
      <form className="row my-row" onSubmit={()=>AddToDoBtnClick(event)}>
        <div className="col-4">
          <input
            type="text"
            name=""
            id=""
            value={todoName}
            className="form-control"
            placeholder="Enter ToDo Here"
            onChange={HandleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={HandleDateChange}
            className="form-control"
            value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success my-button"
            
          >
            <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
