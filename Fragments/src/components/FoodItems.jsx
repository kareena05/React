import { useState } from "react";
import Item from "./Item";


const FoodItems = ({ items }) => {
  const handleBuyBtnClick=(foodItem,event)=>{
    console.log(event);
    console.log(foodItem+ " bought");
    let newActiveItems = [...activeItems,foodItem];
    setActiveItems(newActiveItems);
    console.log(newActiveItems);
    console.log("active"+activeItems);
  
    
  }
  let [activeItems,setActiveItems]=useState([]);
  return (
    <>
      <ul className="list-container">
        {items.map((x) => (
          <Item handleBuyBtnClick={handleBuyBtnClick} bought={`${activeItems.includes(x)}`} key={x} foodItem={x}></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
