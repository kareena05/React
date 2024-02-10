import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
function AddToDoFormRef({ AddToDoBtnHandler }) {
 
const toDoNameElement  = useRef("");
const dueDateElement = useRef("");
 
  function AddToDoBtnClick(event) {
    event.preventDefault();
    AddToDoBtnHandler(toDoNameElement.current.value,dueDateElement.current.value);
    toDoNameElement.current.value="";
      dueDateElement.current.value="";
    
  }

  return (
    <div>
      <form className="row my-row" onSubmit={AddToDoBtnClick}>
        <div className="col-4">
          <input
            type="text"
            name=""
            id=""
            ref={toDoNameElement}
            className="form-control"
            placeholder="Enter ToDo Here"
            
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
           ref={dueDateElement}
            id=""
            className="form-control"
            
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
export default AddToDoFormRef;
