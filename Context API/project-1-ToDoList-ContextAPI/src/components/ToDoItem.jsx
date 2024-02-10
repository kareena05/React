import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ToDoItemStoreContext } from "../store/ToDoItemStore";
const ToDoItem = ({ToDoItemObj})=>{
    const {DeleteItem} = useContext(ToDoItemStoreContext);
    return (<>
    <div className="col-4">
     {console.log(ToDoItemObj+"helo")}
        <p className="lead">{ToDoItemObj.name}</p>
      </div>
      <div className="col-4">{ToDoItemObj.dueDate}</div>
      <div className="col-2">
        <button className="btn btn-danger my-button" onClick={()=>DeleteItem(ToDoItemObj.name)}><MdDeleteForever /></button>
      </div>
    </>)
}



  
  export default ToDoItem;
  
