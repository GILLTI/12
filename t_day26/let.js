//2번 : let 키워드

let data1 = 'let변수';
console.log(data1, typeof data1, typeof(data1));
data1 = 'data1 변수의 값 수정'
console.log(data1, typeof data1, typeof(data1));
data1 = 100;
console.log(data1, typeof(data1));

// let data1 = '값 수정 중'; SyntaxError: Identifier 'data1' has 
// already been declared
// 값 수정 중 오류발생        참조에러 : 초기화되지 않음

// console.log(data2, typeof(data2)); 오류발생 ReferenceError: 
// Cannot access 'data2' before initialization

//스택오브플로어 사이트에서  오류 검색

let data2 = "let 변수 두번째";

// 호이스팅은 자바스크립트에서 변수와 함수 선언을 코드의 최상단으로 끌어올리는 것을 의미한다
// 코드를 실행하기 전에 변수, 함수 등의 선언이 메모리에 저장되기 때문에 가능하다

// var로 선언된 변수는 선언과 동시에 undefined로 초기화 되고 이후에 실제 값으로 할당된다
// 따라서 var로 선언된 변수는 선언전에도 접근가능하며 undefined의 값을 가진다

// let과 const는 호이스팅이 되지만 초기화는 되지 않는다
// 선언 전에 접근하려고 하면 참조에러(ReferenceError)가 발생한다
// 그 이유는 let, const 는 선언이 코드의 실행 흐름에 도달했을 때 초기화 되기 때문이다