

// function sum() {
//     let a = 5 + 6;
//     return a;
// }
// console.log(sum());


//  function sum() {
//         let a = 5 + 6;
//         console.log(a);
        
//     }
//    sum();


function ran(min, max){
    let num = Math.floor(Math.random()*(max+1-min) + min);
    return num;
}
let minInt = +prompt('enter minimum number');
let maxInt = +prompt('enter maximim number');
let sum =  +prompt('how many task you want to do');
let countTrue = 0;
let countWrong = 0;

for(let i = 0; i < sum; i++ ){
    let num1 = ran(minInt,maxInt);
    let num2 = ran(minInt,maxInt);
    let prim = +prompt(num1 + '+' + num2 + '=');
    let ans = num1 + num2;
    if (prim == ans) {
        countTrue++;
        console.log('u added right ' );
        
    }else    {
        countWrong++;
        console.log('u added wrong ' + ' right answer is ' + ans );
        
    }
    
}
console.log('we had ' + sum + ' tasks' + ' u answerd to ' + countTrue + ' question right '  + ' and ' + ' u answered to ' + countWrong + ' question wrong do it well next time');
    
// let a = +prompt('f');
// let b = +prompt('s');
// let c = a+b;
// let p = +prompt('ur answer');
// if (c == p) {
//     console.log('i see u are good at Math of cours answer is' + c);
    
    
// } else {
//     console.log('u wrong');
//     console.log('it should be ' + c);
    
// }