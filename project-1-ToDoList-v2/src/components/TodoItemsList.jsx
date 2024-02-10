import ToDoItem from "./ToDoItem";

const ToDoListItems = ({ ToDoItems,OnDeleteItem }) => {
  return (
    <div className="row my-row item-row">
      {ToDoItems.map((item) => (
        <ToDoItem key={item+"key"} ToDoItemObj={item} OnDeleteItem={OnDeleteItem}></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoListItems;
