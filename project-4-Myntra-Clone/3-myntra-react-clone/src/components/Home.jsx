
import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const itemStore = useSelector((state) => state.item);
  return (
    <>
      <main>
       
        <div className="items-container">
          {itemStore.map((item) => {
            //console.log(item);
          return <HomeItem key={item.id} item={item}></HomeItem>}
          )}
        </div>
      </main>
    </>
  );
};
export default Home;
