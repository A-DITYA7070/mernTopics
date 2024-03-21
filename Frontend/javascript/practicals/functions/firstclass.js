
// // Normal function.
// function hello(){
//     console.log("hello dear ");
// }
// // 1. assigning to a variable.
// const variable = function anonymus(){
//     console.log("assigning to a variable ")
// }
// // No need to define name like anonymus it can work as this as well if assigned in variable
// const variable2 = function(){
//     console("assigning to a variable 2 ")
// }
// // 2. passing function as an argument.
// function Operate(a,b,fn){
//     console.log(fn(a,b));
// }

// function sum(a,b){
//     return a+b;
// }


// // 3. returning function from a function ...

// function greet_me(){
//     return function(){
//         console.log("Greeting you ");
//     }
// }

// function func(){
//     console.log("hello from outer ")
//     return function(){
//         console.log("hello from inner 1 ");
//         return function(){
//             console.log("hello from inner 2 ");
//         }
//     }
// }

// variable()
// hello()
// Operate(3,4,sum);
// greet_me()();
// func()()();

// since js qualifies all the three conditions hence its function are first class citizen..

// function sum(){
//     const len = arguments.length;
//     let ans=0;
//     for(let i=0;i<len;i++){
//         ans+=arguments[i];
//     }
//     return ans;
// }
// console.log(sum(2,3,4));

// const sum = (...args) => {
//     console.log(args);
// }
// sum(2,34,5);