// 성적이 90이상 점수들의 평균을 반환하는 함수 avg를 구현하시오
function avg(array) {
    let result = 0 //총합
    let count = 0 //요소 수
    for(let i=0;i<array.length;i++){
        if(array[i] >=90){
            result += array[i]
            count +=1
        }
    }
    return result / count
}

let grads = [90,82,100,70,80]
let result = avg(grads)
console.log(result)