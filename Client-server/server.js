const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //loadash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("heyy")
    });
    greet();
    //set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path = path + 'index.html'
            res.statusCode = 200;
            break
        case '/about':
            path = path + 'about.html'
            res.statusCode = 200;
            break
        case '/about-me':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end()
            break
        default:
            path = path + '404.html'
            res.statusCode = 404;
            break
    }
    //send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request')
})