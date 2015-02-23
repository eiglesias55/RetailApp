const totalQuestions = 5;

/*var question1 = false, question2 = false, question3 = false, question4 = false, question5 = false; // True : Answered, False: Pending;*/


$(document).ready(function () {

    var question1 = false, question2 = false, question3 = false, question4 = false, question5 = false; // True : Answered, False: Pending;

    $('.round-tabs').hide(0);

    if ($('#question1').attr('class') === 'tab-pane fade in active') {
        $('#tab1 span.round-tabs').fadeTo(200, 1);
    }

    /* ----------------------------------------- Question 1 ----------------------------------------------*/
   
    $("#question1 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question1 !== true) {
            question1 = true;
            $("#tab2").attr("data-toggle", "tab");              // Atributo que hace al tab seleccionable.
            $("#tab2").attr("href", "#question2");              // Id de la pregunta a la que hace referencia.
            $("#tab1").parent().removeClass("active");          // Remueve la clase al padre del id "tab1".
            $("#tab2").parent().addClass("active");             //Agrega la clase al padre del id "tab2".
            $('#question1').attr("class", "tab-pane fade");     //Atributo que vuelve al tab inactivo.
            $('#question2').attr("class", "tab-pane fade in active"); //Atributo que vuelve al tab activo.
            $('#tab2 span.round-tabs').fadeTo(200, 1);          //Atributo que hace visible al tab, cuando la pregunta anterior (requerida) es respondida.
        }
    });

    /* ----------------------------------------- Question 2 ----------------------------------------------*/

    $("#question2 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question2 !== true) {
            question2 = true;
            $("#tab3").attr("data-toggle", "tab");
            $("#tab3").attr("href", "#question3");
            $("#tab2").parent().removeClass("active");
            $("#tab3").parent().addClass("active");
            $('#question2').attr("class", "tab-pane fade");
            $('#question3').attr("class", "tab-pane fade in active");
            $('#tab3 span.round-tabs').fadeTo(200, 1);
        }
    });

    /* ----------------------------------------- Question 3 ----------------------------------------------*/

    $("#question3 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question3 !== true) {
            question3 = true;
            $("#tab4").attr("data-toggle", "tab");
            $("#tab4").attr("href", "#question4");
            $("#tab3").parent().removeClass("active");
            $("#tab4").parent().addClass("active");
            $('#question3').attr("class", "tab-pane fade");
            $('#question4').attr("class", "tab-pane fade in active");
            $('#tab4 span.round-tabs').fadeTo(200, 1);
        }
    });

    /* ----------------------------------------- Question 4 ----------------------------------------------*/

    
    $("#question4 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question4 !== true) {
            question4 = true;
            $("#tab5").attr("data-toggle", "tab");
            $("#tab5").attr("href", "#question5");
            $("#tab4").parent().removeClass("active");
            $("#tab5").parent().addClass("active");
            $('#question4').attr("class", "tab-pane fade");
            $('#question5').attr("class", "tab-pane fade in active");
            $('#tab5 span.round-tabs').fadeTo(200, 1);
        }

        });

    /* ----------------------------------------- Question 5 ----------------------------------------------*/

        
    $("#question5 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        if (question5 !== true) {
            question5 = true;
            $(".tab-content").append("<div class='text-center'><a href='#' class='email-button'>Terminar</a></div>");
        }
        });
});

 