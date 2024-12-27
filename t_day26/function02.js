// 12번 : 일반함수(매개변수로 함수 전달)

function showNumber(num){
  console.log(`showNumber 함수실행`);
  console.log(`num : ${num}`);
  return num;
}

//함수호출
console.log(showNumber(10));

//함수를 매개변수로 넘겨줄 수 있다
function decrease(number){
  console.log('decrease 함수호출');
  return number - 1;
}

//함수호출
console.log(decrease(10));

showNumber 
decrease

console.log(showNumber(decrease(10)));