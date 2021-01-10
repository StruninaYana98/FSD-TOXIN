import './facebook.svg';
import './twitter.svg';
import './inst.svg';
$(document).ready(function() {
    $(".footer__list-header").on("click", function() {
    
    $(this).siblings(".footer__list").toggleClass("footer__list_expanded");

    });
    });