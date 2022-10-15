$(document).ready(function () {
    let ulposition = $('ul').offset().top

    $(window).on('scroll', function(e){
        let window = $(this).scrollTop();
        if (ulposition <= window) {
            $('ul').addClass('fixed');
        } else {
            $('ul').removeClass('fixed');
        }
    })

});

//풀었따 ㅋㅋ