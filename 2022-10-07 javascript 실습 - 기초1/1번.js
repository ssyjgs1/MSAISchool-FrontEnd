// 배열을 넘겨받았을 때 배열 안의 요소들의 총합을 구하는 함수 sum을 구현하라. 60이 출력되어야 함.
function sum(array) {
    let result = 0
    for (i=0; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}

let numbers = [10,20,30]
let result = sum(numbers)
console.log(result)