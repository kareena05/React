import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoItemStoreContext } from "../store/ToDoItemStore";

const ToDoListItems = () => {

  const {ToDoItems} = useContext(ToDoItemStoreContext);
  return (
    <div className="row my-row item-row">
      {ToDoItems.map((item) => (
        <ToDoItem key={item+"key"} ToDoItemObj={item} ></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoListItems;
