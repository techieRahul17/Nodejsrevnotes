const express=require('express');
const app=express();
//application level settings
app.set('view engine','ejs');

//routing
app.get('/',(req,res)=>{
    res.send("Home page");
});
app.post('/api/data',(req,res)=>{
    res.json({
        message:"Hello World",data:req.body});
});

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send('something went wrong');
});
const port=3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
});