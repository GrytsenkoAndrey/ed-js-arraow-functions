// arrow functin = a concise way to write function expressions
//                 good for simple functions that you use only once
//                 (parameters) => some code

// 1
// function hello() {
//   console.log("hello");
// }
// 2
// const hello = function() {
//   console.log('hello');
// }
// hello();
// the same but
// const hello = (name, age) => { console.log(`Hello ${name}`)
//                               console.log(`; you are ${age} years old`)};

// hello('Vasya', 10);


//////////// example 2

setTimeout(function () {
  console.log('hello');
}, 3000);


