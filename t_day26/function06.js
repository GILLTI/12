// 16번 : 즉시 실행함수

(function(){
  console.log("javascript 2일차 수업");
})();

// let result = (function (num1, num2){
//   return num1 + num2;
// })(10, 20);

// console.log(result);

let result2 = (function (num1, num2){
  return num1 + num2;
})(50, "30");

console.log(result2);

//모듈패턴(private scope)
const Counter = (function (){
  let count = 0;
  return {
    increment : function (){
      count++;
      return count;
    },
    decrement : function (){
      count--;
      return count;
    },
  };
})();

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());

//초기화코드
(function (){
  const name = "짱구";
  console.log(`${name}, 안녕!`);
})();