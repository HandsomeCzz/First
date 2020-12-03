var fs = require("fs");

fs.readFile("../index.html",(err,data)=>{
    console.log(data.toString());
})