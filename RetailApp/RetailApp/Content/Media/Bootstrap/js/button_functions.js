$(document).ready(function () {
    $('#loginModal div.modal-dialog div#modal-email').hide(0);

    $('button.button').mouseenter(function () {
        $(this).css("background-color", "#1e62d0");
        $(this).css("transition", "0.5s");
        $(this).css("border", "1px solid black");
        $('.custom-logo').css("background-color", "#1e62d0");
        $('.custom-logo').css("transition", "0.5s");
        $('.custom-logo').css("border-right", "2px solid #022248");
        $('.custom-button').css("background-color", "#1e62d0");
        $('.custom-button').css("transition", "0.5s");
        $('.custom-button').css("border-left", "2px solid #022248");
    });
    $('button.button').mouseleave(function () {
        $(this).css("background-color", "#022248");
        $(this).css("transition", "0.5s");
        $('.custom-logo').css("background-color", "#022248");
        $('.custom-logo').css("transition", "0.5s");
        $('.custom-logo').css("border-right", "2px solid #030f1e");
        $('.custom-button').css("background-color", "#022248");
        $('.custom-button').css("transition", "0.5s");
        $('.custom-button').css("border-left", "2px solid #030f1e");
    });

    $('button.button').click(function () {   
    });

    $('span.pull-right a').click(function () {
        $('#modal-toSlide').slideUp(500, function () {
            if ($('#loginModal div.modal-dialog div.modal-footer span.pull-right a').text() === 'No deseas loguear con facebook?') {
                $('#modal-facebook').hide(0);
                $('#modal-email').show(0);                                            
            } else {
                $('#modal-email').hide(0);
                $('#modal-facebook').show(0);
            }
        });        
        $('#modal-toSlide').slideDown(500);
    });  
});



