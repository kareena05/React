import { createContext, useReducer } from "react";
const InitialToDoItems = [
  { name: "Buy noodels", dueDate: new Date().toLocaleDateString() },
  { name: "Get a New Bottle", dueDate: new Date().toLocaleDateString() },
  { name: "Have a break", dueDate: new Date().toLocaleDateString() },
];

export const ToDoItemStoreContext = createContext({
  ToDoItems: [],
  AddNewItem: () => {},
  DeleteItem: () => {},
});

const TodoReducer = (currentValue, action) => {
  let newTodoItem = currentValue;
  if (action.type == "ADD_ITEM") {
    newTodoItem = [
      ...currentValue,
      { name: action.payload.toDoName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItem = currentValue.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItem;
};

const TodoContextProvider = ({ children }) => {
  function addNewToDo(toDoName, dueDate) {
    if (
      toDoName != undefined &&
      toDoName != "" &&
      dueDate != undefined &&
      dueDate != ""
    ) {
      const AddItemAction = {
        type: "ADD_ITEM",
        payload: {
          toDoName,
          dueDate,
        },
      };
      dispatchTodoItems(AddItemAction);
    }
  }
  function DeleteToDoItem(todoItemName) {
    const DeleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(DeleteItemAction);
  }
  const [ToDoItems, dispatchTodoItems] = useReducer(
    TodoReducer,
    InitialToDoItems
  );

  return (
    <ToDoItemStoreContext.Provider
      value={{
        ToDoItems: ToDoItems,
        AddNewItem: addNewToDo,
        DeleteItem: DeleteToDoItem,
      }}
    >
      {children}
    </ToDoItemStoreContext.Provider>
  );
};
export default TodoContextProvider;
