// 숫자를 넘겨줬을 때 1부터 해당 숫자까지의 총합을 구하는 totalSum 함수를 구현하시오. 출력값 66
// function totalSum(n) {
//     let sum = 0
//     for (i=0; i <= n; i++){
//         sum = sum + i
//     }
//     return sum
// }


//강사 정답본
function totalSum(n) {
    let sum = 0
    for (let i=n; i>0; i--){
        sum = sum + i
    }
    return sum
}

let num = 11
let result = totalSum(num)
console.log(result)