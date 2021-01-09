import '../../node_modules/simple-pagination.js/jquery.simplePagination.js'
$('.pagination__nav').pagination({
    items: 15,
    itemsOnPage: 1,
    edges:1,
    displayedPages:3,
    ellipsePageSet:false,
    prevText:' ',
    nextText:' '
});

var num = $('.pagination__nav').pagination('getCurrentPage');
$('.pagination__bottom').text((num*12-11) + ' - ' + num*12 + ' из 100+ вариантов аренды ') 
$('.pagination__nav').on('click',function() {
var num = $('.pagination__nav').pagination('getCurrentPage');
console.log(num);
$('.pagination__bottom').text((num*12-11) + ' - ' + num*12 + ' из 100+ вариантов аренды ') 
});
