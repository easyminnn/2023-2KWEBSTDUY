const express = require('express');
const { post } = require('../1/router');
const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index.pug'));
app.get('/', (req, res) => {});
app.get('/page', (req, res) => {
    const { page, author } = req.query;
    res.render('board.pug', { page, author});
});
app.get('/posts', (req, res) => {Å
    const {until} = req.query;
    const untilParsed = parseInt(until, 10);

    const posts = []
    if(!isNaN(untilParsed)){
        for (let i=0; i<untilParsed; i++){
            posts.push(`Post ${i + 1}`);
        }
    }
    res.render('posts.pug', { posts});
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));