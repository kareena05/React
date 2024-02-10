import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  // const GetPosts=()=>{
  //   console.log("posts fetched")
  // }
    const {postList,fetching} = useContext(PostListContext);
    
    return (
     
    <div className="row my-row">
       {fetching && <LoadingSpinner></LoadingSpinner>}
       {!fetching && postList.length == 0 && <WelcomeMsg></WelcomeMsg>}
      {postList.map((post)=><Post key={post.id} postItem={post} />)}
    </div>
  );
};
export default PostList;
