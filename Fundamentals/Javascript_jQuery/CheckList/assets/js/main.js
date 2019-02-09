// Check off todos
$('ul').on("click", "li", function () {
    $(this).toggleClass("completed");
})

// Click on X to delete todo
$("ul").on("click", "li span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    // Enter key
    if (event.which === 13) {
        let input = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + input + "</li>");
        $(this).val("");
    }
})

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})

