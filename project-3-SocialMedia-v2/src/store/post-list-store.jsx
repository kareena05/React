import { useReducer,useEffect,useState } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  getAllServerPost: () => {},
  addPost: () => {},
  deletePost: () => {},
};
export const PostListContext = createContext(DEFAULT_CONTEXT);
const postListReducer = (currentState, action) => {
  let newPostList = currentState;
  if (action.type == "GET_INITIAL_POST") {
   newPostList = action.payload;
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currentState];
    console.log(newPostList);
  } else if (action.type == "DELETE_POST") {
    newPostList = currentState.filter(
      (post) => post.id != action.payload.postId
    );
  }
  return newPostList;
};


//component
// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching,setFetching]= useState(false);
  useEffect(()=>{
    const controller =new  AbortController();
    const {signal} = controller;
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
  .then((res) => res.json())
  .then(data =>{
    setFetching(false);
    getAllServerPost(data.posts);
});
 return ()=>{
  controller.abort();
  console.log("Clean up useEffect code for PostList component called")
 }   
   },[]);
  const getAllServerPost = (dataPosts) => {
    
  const GetPostAction = {
    type: "GET_INITIAL_POST",
    payload: dataPosts,
  };
  console.log("posts fetched dispatch");
  dispatchPostList(GetPostAction);
    
  };
  const addPost = (postObj) => {
    console.log(postObj);
    const AddPostAction = {
      type: "ADD_POST",
      payload: postObj,
    };
    console.log(postObj.tags); // Log the type of tags before split
    AddPostAction.payload.tags = AddPostAction.payload.tags.split(" ");
    console.log(postObj.tags);
    dispatchPostList(AddPostAction);
    return "post added";
  };
  const deletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(deletePostAction);
    console.log("post deleted");
    return "post deleted";
  };
  return (
    <PostListContext.Provider
      value={{ postList, fetching, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
// const DEFAULT_POSTLIST = [
//     {
//         id:1,
//         title:'Guitar workshop',
//         body:"Strumming into creativity: Unleash your musical potential at our Guitar Workshop. Elevate your skills and join the harmonious journey now!",
//         reactions:12,
//         tags:['guitar','workshop','art']

//     },{
//         id:2,
//         title:'Raised funds of 21 Cr',
//         body:"Dive into success! Secured a remarkable 21 Cr investment on Shark Tank India. Grateful for the support on our entrepreneurial journey!",
//         reactions:103,
//         tags:['FundRaise','SharkTankIndia','Startup']

//     }
// ];