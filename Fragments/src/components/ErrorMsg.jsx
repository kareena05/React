const ErrorMsg = ({items}) => {

//let foodItems = [];
  let showList = items.length == 0 ? <h2>I am hungry</h2> : null;
//   {foodItems.length == 0 ? <h2>I am hungry</h2> : null;}
//   {foodItems.length == 0 && <h2>I am hungry</h2>;}
    return showList;
};
export default ErrorMsg;
