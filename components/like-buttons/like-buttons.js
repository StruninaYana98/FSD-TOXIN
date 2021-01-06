$(document).ready(function() {
    $(".like-buttons").on("click", function() {
    $(this).toggleClass("like-buttons__active");
    var i = parseInt($(this).text());
    if ($(this).hasClass("like-buttons__active")) {
    i++;} else {
        i--;
    }
    $(this).text(i);
    });
    });