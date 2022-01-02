const scopeExam = () => {
  var a = 'var';
  let b = 'let';
  console.log(a,b); // var let

  {
    var c = 'var';
    let d = 'let';
    console.log(c,d); // var let
  }

  console.log(c); // var
  // console.log(d); // ReferenceError: d is not defined
};

scopeExam();

const hoistingExam = () => {
  console.log(a); // undefined
  var a = 'var';
  console.log(a); // var

  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 'let';
  console.log(b); // let
};

hoistingExam();

// ブラウザで実行する
var a = 'var';
let b = 'let';
// console.log(window.a); // var
// console.log(window.b); // undefined

'use strict';
var a = 'var1';
var a = 'var2';

// let b = 'let1';
// let b = 'let2'; // SyntaxError: Identifier 'b' has already been declared