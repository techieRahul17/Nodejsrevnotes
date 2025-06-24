const express=require("express");
const app=express();

//Define middleware func
const myfuncmiddleware=(req,res,next)=>{
    console.log("This middleware is running on every request");
    next();
};
app.use(myfuncmiddleware);
app.get('/',(req,res)=>{
    res.send('Homepage');
});
app.get('/products',(req,res)=>{
    res.send('Products');
});
app.listen(3000,()=>{
    console.log("Server started on port 3000");
});
