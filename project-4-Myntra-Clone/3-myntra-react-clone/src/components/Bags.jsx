import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bags = ()=>{
  // const item = {
  //   id: "001",
  //   image: "images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: { stars: 4.5, count: 1400 },
  // };
  const bag = useSelector((state) => state.bag);
  const items = useSelector((state)=>state.item);
  const finalItems = items.filter(x => {
     const found = bag.indexOf(x.id);
     return found >=0;
  });
  console.log("final items",finalItems);
 return (<>    
<main>
  <div className="bag-page">
    {finalItems.map((item)=><BagItem item={item} />)}
    
    <BagSummary />

  </div>
</main>

</>);
}
export default Bags;