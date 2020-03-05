 const tutorial = require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.MathObj());


const Eventmitter = require('event');
const eventmitter  = new Eventmitter();
eventmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});

eventmitter.emit('tutorial',1,2);