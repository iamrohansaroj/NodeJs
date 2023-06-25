const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About Rohan</h1> <p> Hey! Lets code</p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1> Hello Everyone</h1> <p> Its just a demo </p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found </h1> <p> Hey this page was not found on this server </p>');
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});