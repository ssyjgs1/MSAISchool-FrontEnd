// 객체를 넘겨 받았을 때 객체의 number 속성이 홀수인 것들의 총합을 계산하는 함수 objectSum을 구현하시오. 출력값 11
function objectSum(numO) {
    let result = 0
    for (let i=0; i<numO.length; i++){
        if (numO[i]['number'] % 2 == 1) {
            result = result + numO[i]['number']
        }
    }
    return result
}


let numObject = [{'name' : 'lee', 'number' : 22}, {'name' : 'park', 'number' : 11}]
let result = objectSum(numObject)
console.log(result)