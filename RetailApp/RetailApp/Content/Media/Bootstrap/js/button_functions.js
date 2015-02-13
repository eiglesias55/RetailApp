$(document).ready(function () {
    $('.button').click(function () {
        $(this).fadeTo('very fast', 0.85);
        $(this).fadeTo('very fast', 1);
    });
    $('span.pull-right a').click(function () {    
        if ($('#loginModal div.modal-dialog div.modal-footer span.pull-right a').text() === 'No deseas loguear con facebook?') {
            $('#loginModal div.modal-dialog div.modal-body').html("<div class='input-group input-group-lg'><span class='input-group-addon' id='sizing-addon1'>@</span><input type='text' class='form-control' placeholder='E-mail' aria-describedby='sizing-addon1'><button type='button' class='pull-right'>Enviar</button></div>");
            $('#loginModal div.modal-dialog div.modal-footer span.pull-right a').html("Volver a loguear con facebook?");
        } else {
            $('#loginModal div.modal-dialog div.modal-body').html("<button class='button' onclick='checkFacebookLogin();'><div class='custom-logo'>f</div><div class='custom-button'>Sign in with Facebook</div></button>");
            $('#loginModal div.modal-dialog div.modal-footer span.pull-right a').html("No deseas loguear con facebook?");
       }
    });
});



