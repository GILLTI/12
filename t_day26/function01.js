// 11번 : 일반함수

//매개변수o, 리턴값o 함수 정의
function getAge(age, num){
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

//매개변수 o, 리턴값o 함수호출 => 출력(함수명(인수1, 인수2)) or 변수명 = 함수명(인수1, 인수2);
console.log(getAge(20, 1));
let result = getAge(25, 1);
console.log(result);

//디폴트 매개변수
function getAge1(name, age, num=1){
  console.log(name, typeof name);
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

let result2 = getAge1("짱구", 5);
console.log(result2);

let result3 = getAge1("짱구", 5, "안녕");
console.log(result3);
//  동적바인딩 때문에 안된다
// 항상 마지막부터

// 아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
//함수명 : introduce, 매개변수ㅇ, 리턴값 -> 식별자(인수);

function introduce(id, psw, iname="아이"){
  // console.log('아이디 : ${id, 비밀번호 : ${pw}, 이름 : ${iname}');
  console.log(id, typeof id);
  console.log(psw, typeof psw);
  console.log(iname, typeof iname);
}

introduce("abc", 0123,"김승현");

//  리턴값 없어서 console 필요 없음
//0123로 인수를 전달하면 8진수로 해석되어 계산된다
// 아이디 : abc, 비밀번호 : 83, 이름 : 짱구
// 0123을 8진수로 변환 => 1 x 8² + 2 x 8¹ + 3 x 8^0 = 64 + 16 + 3 = 83(10진수)


//가변 매개변수 : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용한다
function printAdd(...numbers){
  console.log(numbers, typeof numbers);
  // for (let i = 0; i < numbers.length; i++){
  //   // console.log(i);
  //   console.log(numbers[i]);
  // }

  //자바 for(자료형 변수명 : 배열명){}, 스트림 forEach
  //자바스크립트 for(let 변수명 in 배열명){}
  // for(let i in numbers){
  //   // console.log(i); //인덱스번호
  //   console.log(numbers[i]);
  // }

}

printAdd(1, 2, 3, 'a'); //[ 1, 2, 3, 'a' ] object


