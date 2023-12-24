import { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "../comments/CommentCreate";
import CommentList from "../comments/CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:4000/posts`);
      // console.log(res.data);
      setPosts(res.data); 
    }
    fetchData();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginButtom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h5>{post.title}</h5>
          <CommentList postId={post.id}/>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex justify-content-between flex-wrap flex-row">{renderedPosts}</div>;
}

export default PostList;
