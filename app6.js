// nodejs web 어플리케이션 프레임워크 Express

const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(_dirname,'static')));
app.get('/',(req,res)=>{
    //res.send('Hello World');
    res.sendFile(path.join(_dirname,'static','index.html'));
});
app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

app.get('/example/:name/:age',(req,res)=>{
   console.log(req.params);
   console.log(req.query);
   //res.send('example with route params');
   res.send(req.params.name+":"+req.params.age);

});
app.listen(3000);
