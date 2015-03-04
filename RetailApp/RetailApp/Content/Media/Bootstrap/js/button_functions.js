$(document).ready(function () {
    $('#loginModal div.modal-dialog div#modal-email').hide(0);
    $('#modal-toSlide').slideUp(0, function () {
        $('#modal-toSlide').slideDown(1000);
    });

    $('button.button').mouseenter(function () {
        $(this).css("background-color", "#1e62d0");
        $(this).css("transition", "0.5s");
        $(this).css("border", "1px solid black");
        $('.custom-logo').css("background-color", "#1e62d0");
        $('.custom-logo').css("transition", "0.5s");
        $('.custom-logo').css("border-right", "4px solid #022248");
        $('.custom-button').css("background-color", "#1e62d0");
        $('.custom-button').css("transition", "0.5s");
    });
    $('button.button').mouseleave(function () {
        $(this).css("background-color", "#022248");
        $(this).css("transition", "0.5s");
        $('.custom-logo').css("background-color", "#022248");
        $('.custom-logo').css("transition", "0.5s");
        $('.custom-logo').css("border-right", "4px solid #030f1e");
        $('.custom-button').css("background-color", "#022248");
        $('.custom-button').css("transition", "0.5s");
    });

    $('button.button').click(function () {   
    });

    $('a').click(function () {
        if ($(this).attr("id") === 'logFB') {
            $('#modal-toSlide').slideUp(500, function () {
                $('#modal-fb').hide(10);
                $('#modal-email').show(0);
            });
            $('#modal-toSlide').slideDown(500);
        }else{
            $('#modal-toSlide').slideUp(500, function () {
                $('#modal-email').hide(0);
                $('#modal-fb').show(0);
            });
            $('#modal-toSlide').slideDown(500);
        }     
    });

});
