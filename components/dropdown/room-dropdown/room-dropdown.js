
    
    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    };
    
    function inInput(selec) {
        Num_bedroom='';
        Num_bed='';
        Num_shower='';
        var Num_bedroom = parseInt(selec.find('#bedroom').text());
        if (Num_bedroom==0) {
            var bedroom='';
            Num_bedroom=''
        } else {
            var bedroom =' '+declOfNum(Num_bedroom, ['спальня', 'спальни', 'спален']);
        }
    
        var Num_bed = parseInt(selec.find('#bed').text());
        if (Num_bed==0){
            var bed='';
            Num_bed='';       
        } else {
            var bed = ' '+declOfNum(Num_bed, ['кровать', 'кровати', 'кроватей']);
            if (Num_bedroom>0){
            Num_bed = ', ' + Num_bed;
            }
        }
            
        var Num_shower = parseInt(selec.find('#shower').text());
        if (Num_shower==0){
            var shower='';
            Num_shower='...';     
        } else {
            var shower = ' '+declOfNum(Num_shower, ['ванная комната', 'ванные комнаты', 'ванных комнат']);
            if ((Num_bedroom>0) || (Num_bed>0)) {
            Num_shower = ', '+Num_shower;
            }
        }
        
        if ((Num_bedroom + Num_bed + Num_shower)==0) {
            selec.find('.room-dropdown__input').val( 'Укажите число кроватей, спален и ванных комнат');
        } else {
        selec.find('.room-dropdown__input').val( Num_bedroom + bedroom + Num_bed + bed + Num_shower + shower);
        }
        
    }

    for (let i = 0; i <  $('.room-dropdown').length; i++) {
      inInput($('.room-dropdown:eq('+ i +')'));
    };
    $('.room-dropdown__buffer_expanded').parents('.room-dropdown').find('.room-dropdown__result').addClass('room-dropdown__result_expanded');
    $('.room-dropdown__buffer_expanded').parents('.room-dropdown').find('.room-dropdown__menu').addClass('room-dropdown__menu_expanded');
    
    $('.room-dropdown__button').on('click',function(){

        $(this).parents('.room-dropdown').find('.room-dropdown__menu').toggleClass('room-dropdown__menu_expanded');
        $(this).parent('.room-dropdown__result').toggleClass('room-dropdown__result_expanded');
    });
    
    $(".option__minus").on("click", function() {
    inInput($(this).parents('.room-dropdown'));
 
    });

    $(".option__plus").on("click", function() {
   
    inInput($(this).parents('.room-dropdown'));

    });

