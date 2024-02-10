import { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef("");
  const titleElement = useRef("");
  const postbodyElement = useRef("");
  const reactionsElement = useRef("");
  const tagsElement = useRef("");

  const SubmitForm = (event) => {
    event.preventDefault();
    const postObj = {
      userId: userIdElement.current.value,
      title: titleElement.current.value,
      body: postbodyElement.current.value,
      reactions: reactionsElement.current.value,
      tags: tagsElement.current.value,
    };
    console.log(JSON.stringify(postObj));
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then((resObj)=>{addPost(resObj)});
    (userIdElement.current.value = ""),
      (titleElement.current.value = ""),
      (postbodyElement.current.value = ""),
      (reactionsElement.current.value = ""),
      (tagsElement.current.value = "");
  };
  return (
    <form className="create-post-form" onSubmit={(event) => SubmitForm(event)}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
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
          ref={titleElement}
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
          ref={postbodyElement}
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
          ref={reactionsElement}
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
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="provide tags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
