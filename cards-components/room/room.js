import '../../node_modules/jcarousel/dist/jquery.jcarousel.min.js'

import '../../node_modules/jcarousel/dist/jquery.jcarousel-control.min.js'

import '../../node_modules/jcarousel/dist/jquery.jcarousel-pagination.min.js'


$('.room__carousel').jcarousel({
    list: '.room__list'

});
$('.room__control-prev').jcarouselControl({
    target: '-=1'
});

$('.room__control-next').jcarouselControl({
    target: '+=1'
});

$('.room__pagination').jcarouselPagination({
    item: function (page) {
        if (page == 1) {
            return '<li value="' + page + '" class="room__page room__page_active"> <span  href="#' + page + '" > </li>';
        }
        return '<li value="' + page + '" class="room__page"> <span  href="#' + page + '" class="room__check"> </li>';

    }
});
$('.room__page').on('click', function () {
    $(this).siblings('.room__page').removeClass('room__page_active');
    $(this).addClass('room__page_active')
})

$('.room__control-next').on('click', function () {
    console.log($(this).parents('.room__carousel').jcarousel('visible').val());
    let page = $(this).parents('.room__carousel').jcarousel('visible').val();
    $(this).parents('.room__carousel').find('.room__page').removeClass('room__page_active');
    $(this).parents('.room__carousel').find('.room__page[value="' + page + '"]').addClass('room__page_active');
})
$('.room__control-prev').on('click', function () {
    console.log($(this).parents('.room__carousel').jcarousel('visible').val());
    let page = $(this).parents('.room__carousel').jcarousel('visible').val();
    $(this).parents('.room__carousel').find('.room__page').removeClass('room__page_active');
    $(this).parents('.room__carousel').find('.room__page[value="' + page + '"]').addClass('room__page_active');
})


function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}


for (let i = 0; i < $('.room').length; i++) {
    $('.room__price-per-day:eq(' + i + ')').text(prettify($('.room__price-per-day:eq(' + i + ')').text()));
    $('.room__number:eq(' + i + ')').text(prettify($('.room__number:eq(' + i + ')').text()));
    $('.room__reviews-number:eq(' + i + ')').text(prettify($('.room__reviews-number:eq(' + i + ')').text()));
}