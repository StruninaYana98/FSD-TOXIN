function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}


function diffDates(day_one, day_two) {
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};
let price;
let discount;
let servicecharge;
let additionalservice;
for (let i = 0 ;  i < $('.room-card').length; i++) {
    var dates = $('.room-card:eq(' + i + ')').find('.calendar__datepicker').data('datepicker').selectedDates;
    price = parseInt($('.room-card__day-price:eq('+ i + ')').text());
    discount = parseInt($('.room-card:eq(' + i + ')').find('.room-card__discount').text());
    servicecharge = parseInt($('.room-card:eq(' + i + ')').find('.room-card__service-charge').text());
    additionalservice = parseInt($('.room-card:eq(' + i + ')').find('.room-card__additional-service').text());

    if (dates.length==2) {
        console.log(diffDates(dates[1],dates[0]));
        $('.room-card:eq(' + i + ')').find('.room-card__amount-of-days').text(diffDates(dates[1],dates[0]));
        let days = parseInt($('.room-card:eq(' + i + ')').find('.room-card__amount-of-days').text() )
        $('.room-card:eq(' + i + ')').find('.room-card__total').text(price * days);
        $('.room-card:eq(' + i + ')').find('.room-card__discounted-price').text(price * days - discount + servicecharge + additionalservice);
        console.log(discount,servicecharge, additionalservice);
    }
    $('.room-card__number:eq('+ i + ')').text(prettify($('.room-card__number:eq('+ i + ')').text()));
    $('.room-card__price:eq('+ i + ')').text(prettify($('.room-card__price:eq('+ i + ')').text()));
    $('.room-card__day-price:eq('+ i + ')').text(prettify($('.room-card__day-price:eq('+ i + ')').text()));
    $('.room-card__discount:eq('+ i + ')').text(prettify($('.room-card__discount:eq('+ i + ')').text()));
    $('.room-card__service-charge:eq('+ i + ')').text(prettify($('.room-card__service-charge:eq('+ i + ')').text()));
    $('.room-card__additional-service:eq('+ i + ')').text(prettify($('.room-card__additional-service:eq('+ i + ')').text()));
    $('.room-card__total:eq('+ i + ')').text(prettify($('.room-card__total:eq('+ i + ')').text()));
    $('.room-card__discounted-price:eq('+ i + ')').text(prettify($('.room-card__discounted-price:eq('+ i + ')').text()));


}

$('.room-card').find('.calendar__apply').on('click', function() { 
    
    let dates = $(this).parents('.room-card').find('.calendar__datepicker').data('datepicker').selectedDates;

    if (dates.length==2) {
        console.log(diffDates(dates[1],dates[0]));
     
        $(this).parents('.room-card').find('.room-card__amount-of-days').text(diffDates(dates[1],dates[0]));
        
        $(this).parents('.room-card').find('.room-card__total').text(price * parseInt($(this).parents('.room-card').find('.room-card__amount-of-days').text() ));
        let days = parseInt($(this).parents('.room-card').find('.room-card__amount-of-days').text() )
        $(this).parents('.room-card').find('.room-card__total').text(price * days);
        $(this).parents('.room-card').find('.room-card__discounted-price').text(price * days - discount + servicecharge + additionalservice);
    }
    $(this).parents('.room-card').find('.room-card__number').text(prettify($('.room-card__number').text()));
    $(this).parents('.room-card').find('.room-card__total').text(prettify($('.room-card__total').text()));
    $(this).parents('.room-card').find('.room-card__discounted-price').text(prettify($('.room-card__discounted-price').text()));
})
