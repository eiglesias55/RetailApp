const totalQuestions = 5;

/*var question1 = false, question2 = false, question3 = false, question4 = false, question5 = false; // True : Answered, False: Pending;*/

$(document).ready(function () {

    var question1 = false, question2 = false, question3 = false, question4 = false, question5 = false; // True : Answered, False: Pending;

    $('.round-tabs').hide(0);

    if ($('#question1').attr('class') === 'tab-pane fade in active') {
        $('#tab1 span.round-tabs').fadeTo(200, 1);
    }
    
    $('span.round-tabs').mouseenter(function () {
        if ($(this).parent().parent().attr('class') !== 'active') {
            $(this).animate({ width: "105%", height: "105%" }, 0, "swing");
        }
    });
    $('span.round-tabs').mouseleave(function () {
        if ($(this).parent().parent().attr('class') !== 'active') {
            $(this).animate({ width: "100%", height: "100%" }, 0, "swing");
        }
    });

    function sendResponse(email,idPregunta,opcionRespuesta) {
        $.ajax(
            {
                url: "api/Respuestas/GuardarRespuestas",
                type: "GET",
                contentType: "text/json",
                data: { Email: email, IdPregunta: idPregunta, NumeroOpcion: opcionRespuesta},
                success: function (result) {
                    if (result = "Ok") {
                        alert("ok la api funciona")
                    } else {
                        alert("Error algo anda mal")
                    }
                },
                error: function (xhr, status, p3, p4) {
                    var err = "Error " + " " + status + " " + p3;
                    if (xhr.responseText && xhr.responseText[0] == "{")
                        err = JSON.parse(xhr.responseText).message;
                    console.log(err);
                }
            });
    }

    /* ----------------------------------------- Question 1 ----------------------------------------------*/
   
    $("#question1 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question1 !== true) {
            question1 = true;
            setTimeout(function () {
                $(".board").addClass("loading");
                $.when(sendResponse($("#email_hidden").text(), 1, $("#question1 input[name=choice]:checked").val()))
                    .done(function () {
                        $(".board").removeClass("loading");
                    });
                $("#tab2").attr("data-toggle", "tab");              // Atributo que hace al tab seleccionable.
                $("#tab2").attr("href", "#question2");              // Id de la pregunta a la que hace referencia.
                $("#tab1").parent().removeClass("active");          // Remueve la clase al padre del id "tab1".
                $("#tab2").parent().addClass("active");             //Agrega la clase al padre del id "tab2".            
                $('#question1').attr("class", "tab-pane fade");     //Atributo que vuelve al tab inactivo.               
                $('#question2').attr("class", "tab-pane fade in active"); //Atributo que vuelve al tab activo.
                $('#tab2 span.round-tabs').fadeTo(200, 1);          //Atributo que hace visible al tab, cuando la pregunta anterior (requerida) es respondida.
                sendResponse($("#email_hidden").text(), 1, $("#question1 input[name=choice]:checked").val())
            },500);
        }
    });

    /* ----------------------------------------- Question 2 ----------------------------------------------*/

    $("#question2 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question2 !== true) {
            question2 = true;
            setTimeout(function () {
                $("#tab3").attr("data-toggle", "tab");
                $("#tab3").attr("href", "#question3");
                $("#tab2").parent().removeClass("active");
                $("#tab3").parent().addClass("active");
                $('#question2').attr("class", "tab-pane fade");
                $('#question3').attr("class", "tab-pane fade in active");
                $('#tab3 span.round-tabs').fadeTo(200, 1);
            }, 500);
        }
    });

    /* ----------------------------------------- Question 3 ----------------------------------------------*/

    $("#question3 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question3 !== true) {
            question3 = true;
            setTimeout(function () {
                $("#tab4").attr("data-toggle", "tab");
                $("#tab4").attr("href", "#question4");
                $("#tab3").parent().removeClass("active");
                $("#tab4").parent().addClass("active");
                $('#question3').attr("class", "tab-pane fade");
                $('#question4').attr("class", "tab-pane fade in active");
                $('#tab4 span.round-tabs').fadeTo(200, 1);
            },500);
        }
    });

    /* ----------------------------------------- Question 4 ----------------------------------------------*/

    
    $("#question4 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question4 !== true) {
            question4 = true;
            setTimeout(function () {
                $("#tab5").attr("data-toggle", "tab");
                $("#tab5").attr("href", "#question5");
                $("#tab4").parent().removeClass("active");
                $("#tab5").parent().addClass("active");
                $('#question4').attr("class", "tab-pane fade");
                $('#question5').attr("class", "tab-pane fade in active");
                $('#tab5 span.round-tabs').fadeTo(200, 1);
            }, 500);
        }

    });

    /* ----------------------------------------- Question 5 ----------------------------------------------*/

        
    $("#question5 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question5 !== true) {
            question5 = true;
            $(".tab-content").append("<div class='text-center'><a href='#' class='send-button'>Terminar</a></div>");
        }
        });
});

 