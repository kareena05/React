import { useContext } from "react";
import { ToDoItemStoreContext } from "../store/ToDoItemStore";

function EnjoyMessage(){
    const {ToDoItems} = useContext(ToDoItemStoreContext);
    return ToDoItems.length==0 && <p className="enjoyMsg">Have a Nice Day!🎉</p>
}
export default EnjoyMessage;