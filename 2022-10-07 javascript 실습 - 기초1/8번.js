//카운트를 하고 싶은 과목명과 배열을 넘겨줬을 때 해당 과목명의 수를 세는 countSubject 함수를 구현하시오. 출력값 1
function countSubject(subject,array) {
    let result = 0
    for(let i=0; i<array.length;i++){
        if(array[i] == subject){
            result += 1
        }
    }
    return result
}

let subs = ['국어','수학','영어','국어','과학']
let result = countSubject('수학',subs)
console.log(result)