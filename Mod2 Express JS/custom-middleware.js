 const express=require("express");
const app=express();

const myfunc=(req,res,next)=>{
    const date=new Date().toISOString();
    console.log("This middleware is running on every request");
    console.log(date);
    next();
};
app.use(myfunc);
app.get('/',(req,res,next)=>{
    res.send('Hello World!');
});
app.get('/product',(req,res,next)=>{
    res.send('Hello World1!');
});
app.listen(3000,()=>{
    console.log("Server started on port 3000");
});