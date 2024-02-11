import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
 

  
  return (
    <Form method="post" className="create-post-form">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          // ref={userIdElement}
          name="userId"
          className="form-control"
          id="userId"
          placeholder="User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          // ref={titleElement}
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postbody" className="form-label">
          Post caption
        </label>
        <textarea
          type="text"
          // ref={postbodyElement}
          name="body"
          className="form-control"
          id="postbody"
          rows="3"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          // ref={reactionsElement}
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="1200"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          // ref={tagsElement}
          name="tags"
          className="form-control"
          id="tags"
          placeholder="provide tags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function submitFormData(data){
  const formData = await data.request.formData();
  const postObj = Object.fromEntries(formData);
  console.log(postObj);
  console.log(JSON.stringify(postObj));
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postObj),
  })
    .then((res) => res.json())
    .then((resObj)=>{console.log(resObj)});
    redirect("/");
  
  return "";
}

export default CreatePost;
