// 성적이 90이상인 것이 몇 개인지를 반환하는 함수 countGrade를 구현하시오
function countGrade(array) {
    let sum = 0
    for (i=0; i < array.length; i++) {
        if (array[i] >= 90) {
            sum = sum + 1
        }
    }
    return sum
}

let grads = [90,82,100,70,80]
let result = countGrade(grads)
console.log(result)