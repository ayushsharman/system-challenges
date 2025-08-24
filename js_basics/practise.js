// // console.log(a);
// // // var a = 5;
// // // console.log(a);
// // let a = 4;
// // console.log(a);


// function makeCounter() {
//   let count = 0;
//   return function() { // closes over `count`
//     count += 1;
//     return count;
//   };
// }
// const c = makeCounter();
// console.log(c()); // 1
// console.log(c()); // 2


// async function foo() {
//   console.log('a');
//   await null;
//   console.log('b');
// }
// foo();
// console.log('c');


// let s = "123";
// let n = Number(s);
// console.log(typeof(n));

// console.log(foo());
// var foo = function () {
//   return "Function Expression";
// };
// function foo() {
//   return "Function Declaration";
// }

// let data = 7
// while(data>=0){
//     if (data<=5){
//         data--;
//         continue;
//     }
//     console.log(data);
//     data--;
// }


// // Function Definition
// function welcomeMsg(name) {
//     return ("Hello " + name + " welcome to GeeksforGeeks");
// }

// let nameVal = "User";

// // calling the function
// console.log(welcomeMsg(nameVal));


// const person = {
//     name: 'GFG',
//     greet: function() {
//         console.log('Hello, ' + this.name);
//     }
// };

// person.greet.bind(person)();

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let j = 0; j < 5; j++){
//     console.log(j);
// }

// console.log(i);
// console.log(j);

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter(num => num % 2 === 0)
//                   .map(num => num * 2)
//                   .reduce((acc, curr) => acc + curr, 0);
// console.log(result);

let a = 156e5;
let b = 156e-5;

console.log(a)
console.log(b)