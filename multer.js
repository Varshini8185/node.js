const express = require("express")
const fs = require("fs")
const app = express()
const multer = require("multer")
const path = require("path")

const newPath = path.join(__dirname,"media");
console.log(newPath);
if (!fs.existsSync(newPath)){
    fs.mkdir(newPath,()=>{
        console.log("folder created");
    });
}
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,newPath);
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
});
const fileFilter = (req,file,cb)=>{
    const allowedTypes = ["image/jpeg","image/png","image/jpg"]
    if (allowedTypes.includes(file,mimeType)){
        cb(null,true)
    }
    else{
        cb(new Error("invalid file type"));
    }
}
const upload = multer({storage:storage,fileFilter:fileFilter});
app.post("/register",upload.single("profile_pic"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send("done");
});
app.use((err,req,res,next)=>{
    if (err){
        console.log(err);
        res.status(400).send("only jpeg/jpg/png accepted");
    }
    else{
        next();
    }
});
app.listen(3125,()=>{console.log("server is running")})