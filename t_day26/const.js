// 3번 : const

// console.log(data, typeof data); 호이스팅불가(ReferenceError)
// 호이스팅은 되지만 초기화가 되지않아서 레퍼런스 오류가 발생
const data = 10;
console.log(data, typeof data);
data = "2025년";
// console.log(data, typeof data); //TypeError: Assignment to constant variable.
