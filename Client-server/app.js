const express = require('express');
const morgan = require('morgan')
const app = express();
//monogo db connect
const dbURI = "mongodb+srv://yash:Yash12345@node.xfhjt.mongodb.net/<dbname>?retryWrites=true&w=majority";
//regi view engine

app.set('view engine', 'ejs');

app.listen(3000);

app.use(morgan('dev'));

app.use(express.static('public'));

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