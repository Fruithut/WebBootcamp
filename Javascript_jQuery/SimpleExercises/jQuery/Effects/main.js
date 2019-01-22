// $("button").on("click", function () {
//     $("div").fadeOut("slow", function () {
//         // Observe that the elements are remove from the DOM
//         $(this).remove();
//     });
// })

$("button").on("click", function () {
    $("div").slideToggle();
});