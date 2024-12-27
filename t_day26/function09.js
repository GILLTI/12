// 19번 : 재귀함수

//팩토리얼 : n! 3! => 3 * 2 * 1 = 6

function factorial(n){
  //재귀함수의 종료조건
  if(n === 0){
    return 1;
  }

  //재귀호출 : n * (n - 1)의 팩토리얼
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));

//재귀함수를 이용하여 문자열 뒤집기
//hello => olleh 출력
//함수명 : reverseStr

//1) 순수 재귀와 인덱스 사용
function reverseStr(str, index = 0){
  //종료조건 : 모든 문자를 처리했을때
  if(index === str.length){
    return "";
  }

  //현재 문자 뒤에 재귀적으로 처리된 나머지 문자열 추가
  return reverseStr(str, index + 1) + str[index];
}

//작동과정 
// reveresStr("hello", 0) -> reverseStr("hello", 1)  + "h"
// reveresStr("hello", 1) -> reverseStr("hello", 2)  + "e"
// reveresStr("hello", 2) -> reverseStr("hello", 3)  + "l"
// reveresStr("hello", 3) -> reverseStr("hello", 4)  + "l"
// reveresStr("hello", 4) -> reverseStr("hello", 5)  + "o"
// reverseStr("hello", 5) -> "" (종료조건)
// 최종적으로 o + l + l + e + h => olleh

console.log(reverseStr("hello")); //olleh

//2) slice 사용 - 현대적 
function reveresStr1(str){
  //종료조건
  if(str === "" ||  str.length === 1){
    return str;
  }

  //문자열을 하나씩 처리
  return reveresStr1(str.slice(1)) + str[0];
}

console.log(reveresStr1("hello"));

//3) substr 사용 -> 시작과 길이를 넣어줄 수 있다
function reveresStr2(str){
  //종료조건
  if(str === "" ||  str.length === 1){
    return str;
  }

  //substr(1) : 첫번째 문자열을 제거하고 나머지 문자열 반환
  return reveresStr1(str.substr(1)) + str[0];
}
console.log(reveresStr2("hello"));
