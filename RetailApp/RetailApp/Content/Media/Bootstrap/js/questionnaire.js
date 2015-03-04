$(document).ready(function () {

    var question1 = false, question2 = false, question3 = false, question4 = false, question5 = false; // True : Answered, False: Pending;

    $('.round-tabs,#send-button').hide(0);

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

    var lastAnswered = function(question1,question2,question3,question4,question5){
        var questionNumber;
        if (!question1) {
            questionNumber = "1";
        } else if (!question2) {
            questionNumber = "2";
        } else if (!question3) {
            questionNumber = "3";
        } else if (!question4) {
            questionNumber = "4";
        } else {
            questionNumber = "5";
        }
        return questionNumber;
    }

    /* ----------------------------------------- Question 1 ----------------------------------------------*/
   
    $("#question1 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {     
            setTimeout(function () {
                $(".board").addClass("loading");
                $.when(sendResponse($("#email_hidden").text(), 1, $("#question1 input[name=choice]:checked").val()))
                    .done(function () {
                        $(".board").removeClass("loading");
                    });
                if (question1 !== true) {
                    question1 = true;
                    $("#tab2").attr("data-toggle", "tab");              // Atributo que hace al tab seleccionable.
                    $("#tab2").attr("href", "#question2");              // Id de la pregunta a la que hace referencia        
                    $("#tab2").parent().addClass("active");             //Agrega la clase al padre del id "tab2".  
                    $('#tab2 span.round-tabs').fadeTo(200, 1);          //Atributo que hace visible al tab, cuando la pregunta anterior (requerida) es respondida.
                }
                $("#tab1").parent().removeClass("active");          // Remueve la clase al padre del id "tab1".
                $('#question1').attr("class", "tab-pane fade");     //Atributo que vuelve al tab inactivo.               
                $("#question"+lastAnswered(question1,question2,question3,question4,question5)).attr("class", "tab-pane fade in active"); //Atributo que vuelve al tab activo.               
                $("#tab"+lastAnswered(question1,question2,question3,question4,question5)).parent().addClass("active");
                sendResponse($("#email_hidden").text(), 1, $("#question1 input[name=choice]:checked").val())
            },500);
        
    });

    /* ----------------------------------------- Question 2 ----------------------------------------------*/

    $("#question2 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        setTimeout(function () {
            $(".board").addClass("loading");
            $.when(sendResponse($("#email_hidden").text(), 2, $("#question2 input[name=choice]:checked").val()))
                .done(function () {
                    $(".board").removeClass("loading");
                });
            if (question2 !== true) {
                question2 = true;
                $("#tab3").attr("data-toggle", "tab");             
                $("#tab3").attr("href", "#question3");                    
                $("#tab3").parent().addClass("active");             
                $('#tab3 span.round-tabs').fadeTo(200, 1);          
            }
            $("#tab2").parent().removeClass("active");          
            $('#question2').attr("class", "tab-pane fade");              
            $("#question" + lastAnswered(question1, question2, question3, question4, question5)).attr("class", "tab-pane fade in active"); 
            $("#tab" + lastAnswered(question1, question2, question3, question4, question5)).parent().addClass("active");
            sendResponse($("#email_hidden").text(), 2, $("#question2 input[name=choice]:checked").val())
        }, 500);
    });

    /* ----------------------------------------- Question 3 ----------------------------------------------*/

    $("#question3 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        setTimeout(function () {
            $(".board").addClass("loading");
            $.when(sendResponse($("#email_hidden").text(), 3, $("#question3 input[name=choice]:checked").val()))
                .done(function () {
                    $(".board").removeClass("loading");
                });
            if (question3 !== true) {
                question3 = true;
                $("#tab4").attr("data-toggle", "tab");
                $("#tab4").attr("href", "#question4");
                $("#tab4").parent().addClass("active");
                $('#tab4 span.round-tabs').fadeTo(200, 1);
            }
            $("#tab3").parent().removeClass("active");
            $('#question3').attr("class", "tab-pane fade");
            $("#question" + lastAnswered(question1, question2, question3, question4, question5)).attr("class", "tab-pane fade in active");
            $("#tab" + lastAnswered(question1, question2, question3, question4, question5)).parent().addClass("active");
            sendResponse($("#email_hidden").text(), 3, $("#question3 input[name=choice]:checked").val())
        }, 500);
    });

    /* ----------------------------------------- Question 4 ----------------------------------------------*/

    
    $("#question4 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        setTimeout(function () {
            $(".board").addClass("loading");
            $.when(sendResponse($("#email_hidden").text(), 4, $("#question4 input[name=choice]:checked").val()))
                .done(function () {
                    $(".board").removeClass("loading");
                });
            if (question4 !== true) {
                question4 = true;
                $("#tab5").attr("data-toggle", "tab");
                $("#tab5").attr("href", "#question5");
                $("#tab5").parent().addClass("active");
                $('#tab5 span.round-tabs').fadeTo(200, 1);
            }
            $("#tab4").parent().removeClass("active");
            $('#question4').attr("class", "tab-pane fade");
            $("#question" + lastAnswered(question1, question2, question3, question4, question5)).attr("class", "tab-pane fade in active");
            $("#tab" + lastAnswered(question1, question2, question3, question4, question5)).parent().addClass("active");
            sendResponse($("#email_hidden").text(), 4, $("#question4 input[name=choice]:checked").val())
        }, 500);
    });

    /* ----------------------------------------- Question 5 ----------------------------------------------*/

        
    $("#question5 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question5 !== true) {
            question5 = true;
            sendResponse($("#email_hidden").text(), 5, $("#question5 input[name=choice]:checked").val());
            $("#send-button").show(0);
        }
        });
});
