// 배열을 넘겨받았을 때 배열의 요소 중에 '국어'의 갯수를 반환하는 함수 countKorean을 구현하시오.
function countKorean(array) {
    sum=0
    for (i=0; i < array.length; i++){
        if (array[i]=='국어') {
            sum += 1
        }
    }
    return sum
}

let subs = ['국어','수학','영어','국어','과학']
let result = countKorean(subs)
console.log(result)