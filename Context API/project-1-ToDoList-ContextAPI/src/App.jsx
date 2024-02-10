import { useReducer } from "react";
import AppName from "./components/AppName";
import ToDoListItems from "./components/TodoItemsList";
import EnjoyMessage from "./components/EnjoyMessage";
import AddToDoFormRef from "./components/AddToDoFormRef";
import TodoContextProvider, { ToDoItemStoreContext } from "./store/ToDoItemStore";



function App() {
  // const [ToDoItems, setToDoItems] = useState(InitialToDoItems);
 // const [ToDoItems, dispatchTodoItems] = useReducer(TodoReducer, InitialToDoItems);
  // function addNewToDo(toDoName, dueDate) {
  //   if (
  //     toDoName != undefined &&
  //     toDoName != "" &&
  //     dueDate != undefined &&
  //     dueDate != ""
  //   ) {
  //     const newToDoItems = [...ToDoItems, { name: toDoName, dueDate: dueDate }];
  //     //setToDoItems(newToDoItems);
  //     setToDoItems((currentValue) => [
  //       ...currentValue,
  //       { name: toDoName, dueDate: dueDate },
  //     ]);
  //   }
  // }

  return (
   <TodoContextProvider>
      <center className="container todo-container">
        <AppName />
        {/* way 1  */}
        {/* <AddToDo AddToDoBtnHandler={addNewToDo} /> */}
        <AddToDoFormRef />

        <EnjoyMessage></EnjoyMessage>
        <div className="items-container">
          <ToDoListItems></ToDoListItems>
        </div>
      </center>
      </TodoContextProvider>
  );
}

export default App;
