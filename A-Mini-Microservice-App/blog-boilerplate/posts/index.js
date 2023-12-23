const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());

const posts = {}; // To save all posts we create

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id]);
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
})