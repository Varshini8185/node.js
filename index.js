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
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.write("hello world");
//     res.end("response provided")
// });
// let obj = { name: "varshini", city: "hyd" };
// const server = http.createServer((req, res) => {
//   res.writeHead(201, "hello varshini", { "content-type": "application/json" });
//   res.write(JSON.stringify(obj));
//   res.end();
// });

// server.listen("3101", () => {
//   console.log("server is running");
// })

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     const parsedurl = url.parse(req.url, true);
//     console.log(parsedurl);
//     if (parsedurl.pathname == "/menu") {
//       res.writeHead(200, "ok", { "content-type": "application/json" });
//       res.write(
//         JSON.stringify({
//           veg: [{ panner: "150rs", gobi: "120rs" }],
//           nonveg: [{ chicken: "250rs", fish: "320rs" }],
//           message: "thank you for your order",
//         })
//       );
//       res.end();
//     } else if (parsedurl.pathname == "/menu/veg") {
//       if (parsedurl.query.item == "panner") {
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(
//           JSON.stringify({
//             category: "veg",
//             item: parsedurl.query.item,
//             price: parsedurl.query.quantity * 150,
//             message: "thank you for your order ",
//           })
//         );
//         res.end();
//       } else if (parsedurl.query.item == "gobi") {
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(
//           JSON.stringify({
//             category: "veg",
//             item: parsedurl.query.item,
//             price: parsedurl.query.quantity * 120,
//             message: "thank you for your order ",
//           })
//         );
//         res.end();
//       } else {
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(
//           JSON.stringify({
//             message: "item not found ",
//           })
//         );
//         res.end();
//       }
//     }
//   } else {
//     res.writeHead(200, "ok", { "content-type": "application/json" });
//     res.write(
//       JSON.stringify({
//         message: "item not found ",
//       })
//     );
//     res.end();
//   }
// });
// server.listen("2000", () => {
//   console.log("server is running");
// });

// const http = require("http")
// const server = http.createServer((req,res) => {

//   if (req.method == "POST"){
//       let body = ""
//       req.on("data",(chunk)=>{
//         body +=chunk.toString();
//         console.log(body);
//       });
//        req.on("error",(err)=>{
//         console.log(err);
//         res.write(err);
//       })
//       ;req.on("end",()=>{
//         res.end("data recived");
//       })
//   }
// });
// server.listen("3101",()=>{console.log("server is running")})

// const http = require("http")
const url = require("url")
// const fs = require("fs")
// const server = http.createServer((req,res)=>{
//   if(req.method == "GET"){
//     fs.readFile("./sample.txt","utf8",(err,data)=>{
//       if(err){
//         console.log(err);
//         res.write(err);
//         res.end();
//       }else{
//         console.log(data);
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });
// server.listen("3102",()=>{console.log("sever is running")})

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   if (req.method == "GET") {
//     fs.readFile("./users.json", "utf8", (err, data) => {
//       if (err) {
//         res.end("error");
//       } else {
//         console.log(JSON.parse(data));
//         res.writeHead(200, "ok", { "content-type": "application/json" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let ipdata = {
      name: "varsha",
      role: "software developer",
      location: "hyd",
      email: "varsha@gmail.com",
    };
    fs.readFile("./users.json", "utf8", (err, data) => {
      if (err) {
        res.end(err); 
      } else {
        let existingData = JSON.parse(data);
        existingData.push(ipdata);
        let updatedData = existingData;
        fs.writeFile("./users.json",JSON.stringify(updatedData),(err)=>{
          if (err){
            res.end(err)
          }
          else{
            res.write("data updated");
            res.end();
          }
        });
      }
    });
  }
});
server.listen(3103, () => {
  console.log("sever is running");
});
