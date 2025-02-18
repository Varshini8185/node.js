// const { fun1, x } = require("./module1.js");
// const { cal } = require("./module2.js");
// console.log("iam main module");
// console.log(fun1());
// let a = 4;
// let b = 5;
// console.log(cal(a,b));
// console.log(x)

// "use strict"
// a = 5;
// console.log(a)
const http = require("http")
const server = http.createServer((req,res)=>{
    res.write("hello world");
    res.end("response provided")
})
server.listen("3101",()=>{console.log("server is running")})