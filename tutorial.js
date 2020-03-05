const sum = (num1,num2)=>num1+num2;
const PI=3.14;
class MathObj{
   constructor(){
        console.log('obj created');
    }
}

//module이란 외부 영향을 받지 않고 독립된, 재사용 가능한 코드 묶음
module.exports.sum=sum;
module.exports.PI=PI;
module.exports.MathObj=MathObj;
//못생겼으니 하나로 묶어보자
module.exports= {sum: sum , PI:PI, MathObj : MathObj};

