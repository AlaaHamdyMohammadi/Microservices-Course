import { useState } from "react";
import axios from "axios";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
