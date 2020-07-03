const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const app = express();
//monogo db connect
const dbURI = "mongodb+srv://yash:Yash12345@node.xfhjt.mongodb.net/nodenew?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection established"))
    .catch((err) => console.log(err))


//regi view engine
app.set('view engine', 'ejs');

app.listen(3000);

//app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
//sandbox logics

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });
//     blog.save() //using instance to send 
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find() // not using instance to send 
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             res.send(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5efcc34fddef2d18c0ecd4bc')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             res.send(err);
//         })
// });
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
});

app.use('/blogs', blogRoutes);

app.get('/about-us', (req, res) => {
    res.redirect('about');
});



app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});