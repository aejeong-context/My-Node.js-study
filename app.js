/** const tutorial = require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.MathObj());
**/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//on(event,listener) 지정한 이벤트에 리스너 추가
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});
eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let pedro = new Person('aejeong');
let chris = new Person('Chris');
chris.on('name',()=>{
    console.log('my name is '+ chris.name);
})
pedro.on('name',()=>{console.log('my name is '+pedro.name);
});

pedro.emit('name');
chris.emit('name');


const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,
                            output : process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1+num2;


//`` 
rl.question(`what is ${num1}+${num2} ?`, (userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    }else{
        //prompt가 호출 될 때마다 출력에 기록 될 prompt를 설정한다.
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        //Event : line 사용자가 enter,return할때 발생한다
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer)
            rl.close();
            else{
                rl.setPrompt(`Your answer of ${userInput}is incorrect \n`);
                rl.prompt();
            }
        }) 
    }
});

rl.on('close',()=>{
    console.log('correct!');

});

