require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully!"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

const userSchema= new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    isAdmin: Boolean,
    age: Number,
    tag:[String],
    createdAt: {type:Date,default:Date.now()},
})

//usermodel

const user=mongoose.model('User',userSchema);
async function runQueryExamples(){
    try{
        //create a new doc
        /*const newUser=await user.create({
            username: "rahul",
            password: "6363",
            firstname: "vs",
            lastname: "de",
            isAdmin: true,
            age: 19,
            tag:['dev','gamer']
        });*/
       /* const newUser=new user({
            username: "rahulvs",
            password: "636363",
            firstname: "vsr",
            lastname: "dea",
            isAdmin: true,
            age: 20,
            tag:['devs','gamering']
        });
        await newUser.save();
        console.log(newUser);*/
        const newUser1=await user.create({
            username: "rahul",
            password: "6363",
            firstname: "vs",
            lastname: "de",
            isAdmin: true,
            age: 19,
            tag:['dev','gamer']
        });
        console.log(newUser1);
        //const getAllUsers = await user.find({}
        //);
        //console.log(getAllUsers);
       // const users = await user.find({age:19});
       // console.log(users);
     //   const users1 = await user.findOne({age:20});
    //    console.log(users1);
        //const users2 = await user.findById(newUser1._id);
        //console.log(users2);
      //  const users3 = await user.find().select('name email -_id');
       // console.log(users3);
       // const users4 = await user.find().limit(5).skip(1);
       // console.log(users4);
        const users5 = await user.find().sort({age:-1}).limit(1);
        console.log(users5);
    }catch(err){
        console.error("<UNK> MongoDB connection error:", err)
    }finally{
        await mongoose.connection.close();
    }
}
runQueryExamples();