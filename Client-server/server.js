const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request recieved');
});

server.listen(3000, 'localhost', () => {
console.log('listening for request')
})