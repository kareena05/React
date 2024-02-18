import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/BagSlice";

/* eslint-disable react/prop-types */
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  
  const elementFound = bag.indexOf(item.id) >= 0 ? true : false;
  console.log("element:", item.id, elementFound);
  const handleAddtocart = () => {
    dispatch(BagActions.addToBag(item.id));
  };

  const handleRemovecart = () => {
    dispatch(BagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button className="btn-remove-bag" onClick={() => handleRemovecart()}>
            Remove from Bag
          </button>
        ) : (
          <button className="btn-add-bag" onClick={() => handleAddtocart()}>
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
