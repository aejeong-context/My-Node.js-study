// nodejs web 어플리케이션 프레임워크 Express

const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser')
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    //res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
    //databse work here
    //res.json({success:true});
    const schema = Joi.object().keys({
        email:Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send('an error has occureed');
        }
        console.log(result);
        res.send('successfully posted data');
    })

    
});
app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

//app.get('/example/:name/:age',(req,res)=>{
   //console.log(req.params);
   //console.log(req.query);
   //res.send('example with route params');
//   res.send(req.params.name+":"+req.params.age);

//});
app.listen(3000);
