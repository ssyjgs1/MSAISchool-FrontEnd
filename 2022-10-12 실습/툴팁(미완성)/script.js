$(function() {
    $(document).tooltip();
});

// $(function() {
//     $(".fa-exclamation-circle").tooltip();
// });

$(function() {
    $('showBalloon').tooltip($('title'));
});

$(document).tooltip({
    track: true
});

$('selector').tooltip({
    tooltipClass: ".balloon",
});