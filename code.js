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
const hello = (name) => console.log(`Hello ${name}`);

hello('Vasya');
