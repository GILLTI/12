// 7번 : 데이터타입

// // number
// console.log(3.14, typeof(3.14));
// console.log(Infinity, typeof Infinity); //양의 무한대
// console.log(-Infinity, typeof -Infinity); //음의 무한대
// console.log(NaN, typeof(NaN));

// //number 타입으로 형변환
// let str1 = "123";
// let str2 = "abc";
// let num1 = Number(str1);
// let num2 = Number(str2);
// console.log(str1, typeof str1, num1, typeof num1); //123 string 123 number
// console.log(str2, typeof str2, num2, typeof num2); //abc string NaN number

// //string
// console.log("hello", typeof "hello");
// console.log('hello', typeof 'hello');
// console.log(`hello`, typeof `hello`);

// let numStr = String(num1);
// console.log(numStr, typeof numStr);

// // boolean
// console.log(true, typeof true);
// console.log(false, typeof false);
// console.log(Boolean(" "), typeof Boolean(" "));
// console.log(Boolean(""), typeof(Boolean("")));
// console.log(Boolean(undefined), typeof(Boolean(undefined)));

// //Falsy : 자바스크립트에서 논리적으로 거짓으로 평가되는 값
// // false, 0, -0(음수0), 0n(BigInt 형식의 0), ""(빈문자열), null, undefined, NaN
// //Truthy : 자바스크립트에서 논리적으로 참으로 평가되는값

//true와 false : boolean타입의 명확한 값으로 참과 거짓을 나타낸다
//Falsy와 Truthy : 특정 값들이 논리적 평가(조건문 등)에서 어떻게 처리되는지를 설명하는 개념으로
//Falsy는 false 처럼 동작하고 Truthy는 true처럼 동작하는 값들이다

// Symbol
console.log(Symbol(), typeof Symbol()); //Symbol() symbol
console.log(Symbol("description"), typeof Symbol("description")); //Symbol(description) symbol
// 심볼은 고유함을 보장하며 객체의 키로 심볼을 사용할 수 있다
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1, sym2);

// == : 값만 같음(타입은 무시)
// === : 값과 타입이 같음
console.log(sym1 == sym2); //false
console.log(sym1 === sym2); //false

console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(1,typeof 1, "1", typeof "1"); //1 number 1 string

///Object 
// 객체 : 키-값 쌍의 집합
let person = {name:"김영선", age:20, isStudent:false};
console.log(person, typeof person); //{ name: '김영선', age: 20, isStudent: false }
console.log(person.name); //객체.key로 해당 value에 접근할 수 있다

//array 배열
let arr = [1, 2, 3];
console.log(arr, typeof arr);

//function 함수
function printNum(){
  console.log(1, typeof 1);
}

console.log(printNum, typeof printNum); //[Function: printNum] function
//function이 반환되지만 특별한 객체로 취급된다
