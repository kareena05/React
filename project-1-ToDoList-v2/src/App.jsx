import { useState } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoListItems from "./components/TodoItemsList";
import EnjoyMessage from "./components/EnjoyMessage";
import AddToDoFormRef from "./components/AddToDoFormRef";

const InitialToDoItems = [
  { name: "Buy noodels", dueDate: new Date().toLocaleString() },
  { name: "Get a New Bottle", dueDate: new Date().toLocaleString() },
  { name: "Have a break", dueDate: new Date().toLocaleString() },
];
function App() {
  const [ToDoItems, setToDoItems] = useState(InitialToDoItems);
  function addNewToDo(toDoName, dueDate) {
    if (
      toDoName != undefined &&
      toDoName != "" &&
      dueDate != undefined &&
      dueDate != ""
    ) {
      const newToDoItems = [...ToDoItems, { name: toDoName, dueDate: dueDate }];
      //setToDoItems(newToDoItems);
          setToDoItems((currentValue)=>[...currentValue,{ name: toDoName, dueDate: dueDate }]);
    }
  }
  function DeleteToDoItem(todoItemName) {
    console.log("Item Deleted :" + todoItemName);
    const NewTodoItems = ToDoItems.filter( item => item.name !== todoItemName);
    setToDoItems(NewTodoItems);
  }
  return (
    <center className="container todo-container">
      <AppName />
     {/* way 1  */}
     {/* <AddToDo AddToDoBtnHandler={addNewToDo} /> */}
      <AddToDoFormRef AddToDoBtnHandler={addNewToDo} />

      {ToDoItems.length == 0 && <EnjoyMessage></EnjoyMessage>}
      <div className="items-container">
        <ToDoListItems
          ToDoItems={ToDoItems}
          OnDeleteItem={DeleteToDoItem}
        ></ToDoListItems>
      </div>
    </center>
  );
}

export default App;
