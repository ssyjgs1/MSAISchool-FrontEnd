// 짝수 판별 함수 isEven을 만드시오. 파라미터 하나를 받고 true를 출력하게 하시오.
function isEven(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

let number = 2
let result = isEven(number)
console.log(result)
