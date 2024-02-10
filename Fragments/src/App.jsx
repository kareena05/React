import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import FormInput from "./components/FormInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Milk", "Fruits", "Cashew", "Almonds", "Ghee"];
  

  //way 1:
  // let txt = useState();
  // let textToShow  = txt[0];
  // let setTextToShow = txt[1];


  let [textToShow, setTextToShow] =  useState("empty");
  let [foodItems, setFoodItems] = useState(["Milk", "Fruits"]);


function onKeyDown(event){
 console.log(event.target.value);
 setTextToShow(event.target.value);
 console.log("text "+textToShow);
 if(event.key === 'Enter'){
  let newArr = [...foodItems,event.target.value];
  setFoodItems(newArr);
 }

}
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>

        <p className="heading">you have entered value : {textToShow}</p>
        <FormInput onKeyDownHandler={onKeyDown}></FormInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>



      {/* <Container>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, minus iure beatae molestias ab a doloremque provident praesentium numquam. Fuga reiciendis dolorum quasi eos qui libero debitis, nulla laboriosam iste.
       Necessitatibus consectetur rerum doloremque. Labore, cumque id eius quam deleniti ad voluptates nemo odio aperiam vero excepturi, eos facere laudantium delectus quas animi commodi quos corrupti eveniet incidunt eaque molestias.</p>
      </Container> */}
    </>
  );
}

export default App;
