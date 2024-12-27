// 17번 : 화살표함수(Arrow Function) ★★★
//ES6에서 도입된 간결한 함수 작성 방식

//익명함수
const add1 = function (num1, num2){
  return num1 + num2;
}

//화살표함수
const add2 = (num1, num2) => num1 + num2;
console.log(add2(3, 5));

//이름과 나이를 매개변수로 받아 출력하는 화살표함수
//함수명 : printInfo
//매개변수 2개, 리턴값x

//익명함수
const printInfo1 = function (name, age){
  console.log(`제 이름은 ${name}이고 나이는 ${age}살입니다`);
};

//화살표함수

const printInfo = (name,age) => console.log(`제 이름은 ${name} 이고 나이는 ${age} 살입니다`);

printInfo('철수', 6);

//  in = 인덱스 사용
//  of = 값으로 사용


//매개변수 1개인경우 소괄호 생략 가능
const square = x => x * x;
console.log(square(5));

//매개변수 0개인경우 빈 소괄호 사용
const greet = () => "hello! 2025!!";
console.log(greet());

//여러줄 코드가 필요한 경우 중괄호 사용
const sumArray = (arr) => {
  let sum = 0;
  for(let num of arr){
    sum += num;
    // console.log(num);
  }
  return sum;
};

console.log(sumArray([1, 2, 3]));

//두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기(화살표 함수만 이용)
//함수명 : mul
const mul = (num1, num2) => console.log((num1 * num2) * 3);
mul(2, 2);

//두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기(화살표 함수, 콜백함수 이용)
//함수명 : mul1
const mul1 = (num1, num2, callback) => {
  const product = num1 * num2;
  callback(product);
};
//  유동적임

//결과에 3을 곱해서 출력하는 콜백함수
const multi = result => console.log(result * 3);
mul1(2, 2, multi);
