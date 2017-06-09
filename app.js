const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end('Hello world!');
});

server.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`server is listening on ${port}`)
});
