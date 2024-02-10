import css from './item.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Item = (props) => {
//     let {foodItem} = props;
//   return <li>{foodItem}</li>;
// };

const Item = ({foodItem,handleBuyBtnClick,bought}) => {
   
  return (
  <li className={`${css["my-item"]} ${bought == 'true' && 'active2'}`}>
    {console.log("bought:"+bought)}
    <span className={`${css["my-span"]}`}>{foodItem}</span>
    
    <button className={`${css.button} btn btn-dark`} onClick={(event)=>handleBuyBtnClick(foodItem,event)}>Buy</button>
    </li>);
};
export default Item;
