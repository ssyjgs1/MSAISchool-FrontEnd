let select_index = 0;            //몇 번째 탭이 선택되어 있는지를 저장하고 있는 변수. 즉 처음에 초기화 시키는 역할.
$(document).ready(function () {  //document 써있는 부분은 시작하는 부분
    let enableHover = 1          //상수는 최대한 사용하지 않는 것이 좋다. 문자열도 상수로 취급함
    let falseHover = 0
    let selectedElement = 'ul li'
    setSelect(select_index);

    $(selectedElement).hover(function (e) {
        setHover($(this), enableHover);
    }, function (e) {
        setHover($(this), falseHover);
    })
    $(selectedElement).click(function (e) {
        setSelect($(this).index());
    })
});

function setSelect(index) {
    $('ul li').eq(index).addClass('select'); //ul의 li들을 다 불러와서 인덱스(순번,0~4)를 걸고 select라는 클래스를 추가해라
    $('.content').eq(index).addClass('select').show(); //선택된 index에 따라서 콘텐츠를 보여줌

    if (index != select_index) {  //현재 눌려진 index와 select_index가 같냐? 판별
        $('ul li').eq(select_index).removeClass('select');  //$(`ㅁㅁ`)같이 불러오는 기능은 리소스를 많이 잡아먹는다.
        $('.content').eq(select_index).hide();
        select_index = index;
    }
}

function setHover(el, add) { //add는 0 또는 1.
    if (add == 1) {
        var el_index = el.index();
        if (select_index == el_index) {
            el.removeClass('select');
        }
        el.addClass('hover');
        el.animate({
            height: '75px',
            'line-height': '60px'
        });
    } else {
        el.removeClass('hover');
        el.animate({
            height: '40px',
            'line-height': '35px'
        });
        if (select_index == el.index()) {
            el.addClass('select');
        }
    }
}

// el()은 선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다. 없으면 null 반환함