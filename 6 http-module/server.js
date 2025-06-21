const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Nodejs from HTTP server');
});

const port=3000;
server.listen(port,()=>{
    console.log("server is listening to :",port);
});