// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.png');
//     //200 - > everthing ok!
//     res.writeHead(200,{'Content-type':'image/png'});
//     readStream.pipe(res);
// }).listen(3000);

//npm init

const _ = require('lodash');
let ex = _.fill([1,2,3,4,5],"banana",1,4);
console.log(ex);