// 홀수 판별 함수 isOdd를 작성하시오. 파라미터를 하나 받고 true가 나오게 작성하시오.
function isOdd(num) {
    if (num % 2 == 1) {
        return true
    } else {
        return false
    }
}

let number = 3
let result = isOdd(number)
console.log(result)
