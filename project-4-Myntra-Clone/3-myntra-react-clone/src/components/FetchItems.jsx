import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/ItemSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    dispatch(FetchStatusActions.setFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(FetchStatusActions.setFetchDone());
        dispatch(FetchStatusActions.setFetchingFinished());
        dispatch(itemActions.addInitialItems(data.items));
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {console.log("fetchdone:", fetchStatus.fetchDone)}
      {console.log("fetching:", fetchStatus.isFetching)}
    </>
  );
};
export default FetchItems;
