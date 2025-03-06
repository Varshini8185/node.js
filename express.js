const express = require("express")
const app = express();

app.get("/one",(req,res)=>{
    res.send("iam get request")
});
app.put("/one",(req,res)=>{
    res.send("iam put request")
});
app.post("/one",(req,res)=>{
    res.send("iam post request")
});
app.delete("/one",()=>{
    
});
app.patch("/one",()=>{
    
});

app.listen("3125",()=>{
    console.log("server is running")
})


