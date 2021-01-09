$(document).ready(function() {
    $(".expandable-checkbox__legend").on("click", function() {
    $(this).toggleClass("expandable-checkbox__legend_expanded");
    $(this).siblings(".expandable-checkbox__checkboxes").toggleClass("expandable-checkbox__checkboxes_expanded");

    });
    });