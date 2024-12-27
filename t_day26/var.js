// 1번 : var 키워드

var data1 = '10';
var data2 = 10;
console.log(data1, typeof data1, typeof(data1));
console.log(data2, typeof data2, typeof(data2));
//typeof 연산자, typeof() 함수 : 값의 자료형을 확인

var data1 = true;
console.log(data1, typeof data1, typeof(data1));

console.log(name1, typeof name1); //undefined undefined
var name1 = '김영선';
console.log(name1, typeof(name1)); //김영선 string

//hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다
//초기화 작업은 호이스팅 되지 않고 선언만 호이스팅 된다

var data3 = "값 절대 수정 금지";
//var를 사용하여 변수를 선언한다(오래된 javascript 버전에서 사용된다)
//let, const를 사용하는 것이 권장된다(변수의 스코프와 호이스팅 동작)
console.log(data3, typeof data3);
var data3 = '수정했지롱';
console.log(data3, typeof data3);
data3 = 2025;
console.log(data3, typeof data3);