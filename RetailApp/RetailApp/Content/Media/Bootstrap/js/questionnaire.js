const totalQuestions = 5;

function nextQuestion(number) {
    var $question =$("#question" + number);
    var $nextQuestion =$("#question" + (number + 1));
    var $tab =$("#tab" + number);
    var $nextTab =$("#tab" + (number + 1)+ "');
    var $radio = $("#question" + number + "> div.question-choices > div.choice > input[name='choice']:radio");
    $radio.change(function () {
        $nextTab.attr("data-toggle", "tab");
        $nextTab.attr("href", "#question2");
        $tab.parent().removeClass("active");
        $nextTab.parent().addClass("active");
        $question.attr("class", "tab-pane fade");
        $nextQuestion.attr("class", "tab-pane fade in active");
    });
  }

$(document).ready(function () {
    $('.round-tabs,.liner').hide(0,function () {
        $('.round-tabs').slideDown(1000, function () {
            $('.liner').fadeTo(2000,1);
        });
    });
    
    nextQuestion(1);
    nextQuestion(2);
    nextQuestion(3);
    nextQuestion(4);
   
    /*$("#question1 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {      
        $("#tab2").attr("data-toggle", "tab");
        $("#tab2").attr("href", "#question2");
        $("#tab1").parent().removeClass("active");
        $("#tab2").parent().addClass("active");
        $('#question1').attr("class", "tab-pane fade");
        $('#question2').attr("class", "tab-pane fade in active");
       
    });*/
    
    $("#question5 > div.question-choices > div.choice > input[name='choice']:radio").change(function () {
        $("#question5").append("<div class='text-center'><a href='#' class='email-button'>Enviar</a></div>");
    });


});