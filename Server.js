//Http module for Send Request & Receive Response
const http = require('http');
//File System module for different file operations.
const fs = require('fs');

//Create a Runtime Server
const server = http.createServer((req, res) => {
    //Set http request header type = text/html
    res.setHeader('Content-Type', 'text/html');

    //Our views folder path which contains .html files
    let path = './views/';
    //Routes with switch cases
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if(error){
            console.log(error);
        }
        res.end(data);
    });
});

//Access server on http://localhost:3000
server.listen(3000, 'localhost', () => {
    console.log("Working");
});