const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Homepage");
    }
    else if(url === '/projects'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Projpage");
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Somepage");
    }
});

const port=3000;
server.listen(port,()=>{
    console.log("server is listening to :",port);
});