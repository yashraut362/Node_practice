const express = require('express');

const app = express();
//regi view engine

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds egg', snippet: 'Lorem ipsum dolor knd owdg dsinsd ok nice' },
        { title: 'Mario Hides egg', snippet: 'Lorem ipsum dolor knd owdg dsinsd ok nice' },
        { title: 'Naruto Talk egg', snippet: 'Lorem ipsum dolor knd owdg dsinsd ok nice' },
    ];
    res.render('index', { title: "Home", blogs: blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create a new blog" })
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});