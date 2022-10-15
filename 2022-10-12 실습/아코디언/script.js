var selected_index = -1; //-1은 아무것도 선택하지 않았음을 의미. 어떤 컨텐츠도 펼쳐져 있지 않음

$(document).ready(function () {   //$(document).ready()는 시작하는 부분
    $('.header-content').on('click', function (e) {
        var index = $(this).index();
        $(this).addClass('select');

        //아무것도 선택되어 있지 않을 때
        if (selected_index == -1) {
            $('.content').eq(index / 2).show();
            selected_index = index;
        } 
        //이전에 선택된 것과 다른 것을 선택했을 때
        else if (selected_index != index) {
            $('.content').eq(selected_index / 2).hide();
            $('.header-content').eq(selected_index / 2).removeClass('select');
            $('.content').eq(index / 2).show();
            selected_index = index;
        } 
        else { 
            //같은 것을 또 선택했을 때
            $('.content').eq(selected_index / 2).hide();
            $('.header-content').eq(selected_index / 2).removeClass('select');
            selected_index = -1;
        }
    })
});