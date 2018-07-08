//Fades in/out text input bar
$("#plus").click(function () {
    $("input[type='text']").fadeToggle();
});

//Check off specific todos
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Delete todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
       $(this).remove();
    });
    event.stopPropagation();
});

//Enter key confirmation
$("input[type='text']").keypress(function(event) {
    if (event.which === 13){ //13 = ENTER key
        //grab input
        let input = $(this).val();
        $(this).val(""); //clears input field
        //add input as new li
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + input + "</li>");
    }
});