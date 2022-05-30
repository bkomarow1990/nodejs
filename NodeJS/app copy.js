// server logic
const hostname = 'localhost'; 
const port = 3400;

const http = require('http');
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.end("Server works!");
});
server.listen(port, hostname, () => {
    console.log(`Server is listening ${hostname}:${port}`);
});