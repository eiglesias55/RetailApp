$(function () {
    $('a[title]').tooltip();
});

$(document).ready(function () {
    $('.round-tabs,.liner').hide(0,function () {
        $('.round-tabs').slideDown(1000, function () {
            $('.liner').fadeTo(2000,1);
        });
    });
    if ($('li.active a span.round-tabs').text() === '5') {      
       /*("body").append("<a href='#'>Submit</a>");*/
    }

});