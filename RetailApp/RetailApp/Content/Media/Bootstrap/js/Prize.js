

$(document).ready(function () {

    var showText = function (target, message, index, interval) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () {
                showText(target, message, index, interval);
            }, interval);
        }
    }

    $('#modal-toSlide').slideUp(0, function () {
        $('#modal-toSlide').slideDown(3000,
            showText("#prize-header","Te ganaste un premio!", 0, 100));
    });

    
});
