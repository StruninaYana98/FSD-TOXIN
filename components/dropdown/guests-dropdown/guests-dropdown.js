    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    };
    
    function guestInput(selec) {
    var Num_adult = parseInt(selec.find('#adult').text());
    var Num_kid = parseInt(selec.find('#kid').text());
    var Num_baby = parseInt(selec.find('#baby').text());
    
    if ((Num_adult+Num_kid+Num_baby)==0){
        selec.find('.guests-dropdown__buttons').addClass('guests-dropdown__buttons_cleared');
        selec.find('.button_gray').addClass('guests-dropdown__hidden-button');
        selec.find('.guests-dropdown__input').val( 'Сколько гостей');
        
    } else {
        var m = Num_adult+Num_kid+Num_baby;
        selec.find('.guests-dropdown__input').val(m +' ' + declOfNum(m, ['гость', 'гостя', 'гостей']));
       
    }
   };
  
     for (let i = 0; i <  $('.guests-dropdown').length; i++) {
     
        guestInput($('.guests-dropdown:eq('+ i +')'));

        var Num_adult = parseInt($('.guests-dropdown:eq('+ i +')').find('#adult').text());
        var Num_kid = parseInt($('.guests-dropdown:eq('+ i +')').find('#kid').text());
        var Num_baby = parseInt($('.guests-dropdown:eq('+ i +')').find('#baby').text());

        if ((Num_adult+Num_kid+Num_baby)==0){
            $('.guests-dropdown:eq('+ i +')').find('.guests-dropdown__input').val( 'Сколько гостей');
            
        } else {
            var m = Num_adult+Num_kid+Num_baby;
            $('.guests-dropdown:eq('+ i +')').find('.guests-dropdown__input').val(m +' ' + declOfNum(m, ['гость', 'гостя', 'гостей']));
       
        }

    };
    $('.guests-dropdown__button').on('click',function(){
        $(this).parents('.guests-dropdown').find('.guests-dropdown__menu').toggleClass('guests-dropdown__menu_expanded');
        $(this).parent('.guests-dropdown__result').toggleClass('guests-dropdown__result_expanded');
    });

    $('.guests-dropdown__buffer_expanded').parents('.guests-dropdown').find('.guests-dropdown__result').addClass('guests-dropdown__result_expanded');
    $('.guests-dropdown__buffer_expanded').parents('.guests-dropdown').find('.guests-dropdown__menu').addClass('guests-dropdown__menu_expanded');

    $('.button_bright').on('click', function(){
        guestInput($(this).parents('.guests-dropdown'));
        
     })
    $('.button_gray').on('click',function(){
       
        $(this).parents('.guests-dropdown').find('#adult').text('0');
        $(this).parents('.guests-dropdown').find('#kid').text('0');
        $(this).parents('.guests-dropdown').find('#baby').text('0');
        $(this).parents('.guests-dropdown').find('.option__minus').addClass('option__minus_disabled');
        $(this).parents('.guests-dropdown').find('.guests-dropdown__buttons').addClass('guests-dropdown__buttons_cleared');
        $(this).parents('.guests-dropdown').find('.button_gray').addClass('guests-dropdown__hidden-button');
        
    });

    
 
    $(".option__plus").on("click", function() {

    $(this).parents('.guests-dropdown').find('.guests-dropdown__buttons').removeClass('guests-dropdown__buttons_cleared');
    $(this).parents('.guests-dropdown').find('.button_gray').removeClass('guests-dropdown__hidden-button');
    
  
   
    });