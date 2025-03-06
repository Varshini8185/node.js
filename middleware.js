const express = require("express");
const app = express();
app.use(express.json());
// var is_valid = true
// app.use((req,res,next)=>{
//     if(is_valid){
//     res.status(200).send("iam middleware 1")
//     next()
//     }else{
//         res.status(404).send("some error");
//     }
// });
// app.use((req,res,next)=>{
//     console.log("iam middleware 2")
// });
// app.get("/info",(req,res)=>{
//     res.send("hii");
// });

const usernameValidator = (req,res,next)=>{
    let inputName = req.body.username;
    var usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if(inputName.length <= 0){
       res.status(400).send("username should not be empty");
    }
    else if(usernameRegex.test(inputName)){
        next();
    }
    else{
        res.status(400).send("username formate is invalid");
    }
}; 
app.post("/signup",usernameValidator,(req,res)=>{
    res.send("user registered successsfully")
})

app.listen("3200",()=>{console.log("server is running")})