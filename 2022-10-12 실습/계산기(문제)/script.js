$(document).ready(function (){
    let selectnum = [];
    let selectop = [];
    let screen = $('.screen')
    //입력해놓은 데이터를 어떻게 저장해놓을 것인가? 연산자 하나당 앞뒤 숫자 하나씩 가져다 쓴다.


    
    $('button.num').click(function(e) {    // e 왜 들어가는지 모르겠고?
        // screen.append((parseInt(document.querySelector('button[value]').innerText))) 발악해봄. 근데 7만 찍혀
        let num_s = $(this).val();  //아직도 this가 뭘 가리키는지 모르겠음
        let num_i = parseInt(num_s); //문자열 숫자로 바꿔서 저장해주는 거 같고
        selectnum.push(num_i);  //저 숫자 넣는 배열에 저장해주는 기능이고
        // console.log(selectnum)
        screen_dis(num_s) //스크린에 보여줌
    });


    $('button.op').click(function() {    // 위는 e들어가는데 여긴 또 왜 안들어가지? e는 도대체 뭐하는 애일까
        let op_s = $(this).val();
        selectop.push(op_s);
        if (op_s == '=') {
            let result = cal(selectnum[0], selectnum[1], op_s[0]);
            selectop.pop();
            for (let i=1; i<selectop.length; i++) {
                console.log(result, selectnum[i+1]);
                result = cal(result, selectnum[i+1], selectop[i]);
            }
            screen_dis('all');
            screen_dis(result.toString());  //여기까지가 계산이 완료된 부분
            selectnum = [];
            selectnum.push(result); //계산한 값을 숫자 배열에 넣어놓고 마무리함
            selectop=[];
        } else if (op_s == 'clear') {
            screen_dis('all');
            selectnum=[];
            selectop=[];
        } else {
            screen_dis(op_s)
        }
    });


    function cal(num1, num2, op) {  // 유일하게 이해하고 쓸 수 있는 구간(사칙연산 하는 함수)
        let result = 0;
        if (op == '+') {
            result = num1 + num2;
        } else if (op == '-') {
            result = num1 - num2;
        } else if (op == '*') {
            result = num1 * num2;
        } else {
            result = num1 / num2;
        }
        return result;
    }


    function screen_dis(el) {   //스크린에 뿌리는 함수. el이 뭔 의미인지 모르겠고? el은 특정 엘리먼트(버튼)
        let screen_text_value = screen.text();
        screen.text(screen_text_value + el);  //이전에 누른 것을 같이 이어서 표시하는 방법

        if (el == 'all') {
            screen.text('');
        }
    }

})

// 버튼을 누르면 그게 screen 화면에 찍혀야 함
// 등호 버튼 누르면 screen 화면 지워지면서 찍힌 식이 계산되어 출력됨
// C 누르면 화면 초기화로 다 지워짐