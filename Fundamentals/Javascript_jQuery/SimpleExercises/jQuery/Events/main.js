// Click()
$("button:first-of-type").click(function () {
    $("h1").css("color", "blue");
});

$("button:last-of-type").click(function () {
    $("h1").css("color", "red");
    $(this).css("background-color", "brown");
});

// Keypress()
$("input").keypress(function (event) {
    console.log(event);
    if (event.which === 13) {
        alert("You hit enter!");
    }
});

// On()
$("h1").on("click", function () {
    // this refers to the item that the eventhandler was called on
    $(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});


