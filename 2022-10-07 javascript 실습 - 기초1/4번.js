// 배열을 넘겨 받았을 때 짝수인 수들의 총합을 계산하는 evenSum 함수를 구현하시오. 출력값 40
function evenSum(array){
    let result = 0
    for (i=0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result = result + array[i]
            }
        }    
        return result
    }

let numbers = [10,21,30]
let result = evenSum(numbers)
console.log(result)