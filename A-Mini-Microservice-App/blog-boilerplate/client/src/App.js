import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <h1>Blog App</h1>
      <h3>Create Post :</h3>
      <PostCreate />
      <hr />
      <h3>Posts :</h3>
      <PostList />
    </div>
  );
}

export default App;
