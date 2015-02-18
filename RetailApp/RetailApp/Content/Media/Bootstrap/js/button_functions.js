$(document).ready(function () {
    $('.button').click(function () {
        $(this).slideUp(500);
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
        setTimeout(function () { $('.button').slideDown(500); }, 500);
    });  
});



