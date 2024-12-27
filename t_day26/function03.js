// 13번 : 내용 공유 참고!!
//1) 일반함수
//매개변수 x 리턴값 x
function showHello(){
  console.log(`hello`);
}

showHello();

//매개변수 o 리턴값 x
function showGreet(greeting){
  console.log(`인사말 : ${greeting}`);
}

showGreet("안녕하세요");
showGreet("안녕히계세요");

//매개변수 x 리턴값 o
function multiply(){
  return 10 * 20;
}

console.log(multiply());
let result = multiply();
console.log(result);

//매개변수 o 리턴값 o
function multi(num1, num2){
  return num1 * num2;
}

console.log(multi(5, 2));
let result2 = multi(10, 5);
console.log(result2);

// 디폴트매개변수가 있다면 인수를 디폴트 매개변수만큼 적게 넣어도 된다
// 가변 매개변수를 사용한다면 배열형태로 출력된다