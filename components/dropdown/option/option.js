$(".option__minus").on("click", function() {
    var i = parseInt($(this).siblings('.option__value').text());
    if (i > 0){
        i--;
        };
        if (i==0) {
        $(this).addClass('option__minus_disabled')
        }
    $(this).siblings('.option__value').text(i);

    
 
    });

    $(".option__plus").on("click", function() {
    var i = parseInt($(this).siblings('.option__value').text());
    i++;
    $(this).siblings('.option__minus').removeClass('option__minus_disabled');
    $(this).siblings('.option__value').text(i);

   
    })