$(document).ready(function () {
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
                $('#loginModal div.modal-dialog div.modal-body').html("<form><div class='form-group'><div id='email-title'><label for='inputEmail3'>Email address</label></div><div class='text-center' id='email-box'><input type='email' class='form-control' id='inputEmail3' placeholder='Enter your email'></div></div><div class='text-center'><a href='#' class='email-button'>Submit</a></div></form>");
                    $('#loginModal div.modal-dialog div.modal-footer span.pull-right a').html("<a href='#' class='link-style'>Volver a loguear con facebook?</a>");
                } else {           
                    $('#loginModal div.modal-dialog div.modal-body').html("<button class='button' onclick='checkFacebookLogin();'><div class='custom-logo'>f</div><div class='custom-button'>Sign in with Facebook</div></button>");
                    $('#loginModal div.modal-dialog div.modal-footer span.pull-right a').html("No deseas loguear con facebook?");
                }
        });        
        $('#modal-toSlide').slideDown(500);
    });  
});



