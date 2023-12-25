const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts ={};

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/events', (req, res) => {
  const {type, data} = req.body;

  if(type === "PostCreated"){
    const {id, title} = data;
    
    posts[id] = {id, title, comments: []};
  }
  if (type === "CommentCreated") {
    const {id, content, postId, status} = data;

    const post = posts[postId];
    post.comments.push({id, content, status});
  }

  res.send({});
})

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Query Service Listen on port: ${PORT}`);
});