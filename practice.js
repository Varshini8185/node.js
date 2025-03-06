const http = require("http")
const server = http.createServer((req,res)=>{
    if (req.method == "POST"){
    //     res.write("hello world");
    // res.end(" response provided")
    let body = ""
    req.on("data",(c)=>{
        body +=c.toString()
        console.log(c)
    })
    req.on("end",()=>{
        body = JSON.parse(body)
        console.log(body)
        res.end("")
    });
}});
server.listen("3100",()=>{console.log("server is running")});
    