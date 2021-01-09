import '../../node_modules/jquery-ui/ui/widget.js';
import '../../node_modules/jquery-ui/ui/widgets/mouse.js';
import '../../node_modules/jquery-ui/ui/widgets/touch-punch.js';
import '../../node_modules/jquery-ui/ui/widgets/slider.js';
$(function () {

    function formatneed(chislo) {
    $(chislo).val($(chislo).val().replace(/\s+/g, ''));
    $(chislo).val($(chislo).val().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
    $(chislo).val($(chislo).val().replace(/^\s/g, ''));
    }
    formatneed(".range-slider__min");
    $(".range-slider__min-buffer").text($(".range-slider__min").val());
    $(".range-slider__min").width($(".range-slider__min-buffer").width());
    formatneed(".range-slider__max");
    $(".range-slider__max-buffer").text($(".range-slider__max").val());
    $(".range-slider__max").width($(".range-slider__max-buffer").width());
    
    $(".range-slider_slider").slider({
       min: 0,
       max: 15600,
       values: [5000,10000],
       range: true,
       stop: function(event, ui) {
       $(".range-slider__min").val($(".range-slider_slider").slider("values",0));
       $(".range-slider__max").val($(".range-slider_slider").slider("values",1));

      formatneed(".range-slider__min");
      $(".range-slider__min-buffer").text($(".range-slider__min").val());
      $(".range-slider__min").width($(".range-slider__min-buffer").width());
      formatneed(".range-slider__max");
      $(".range-slider__max-buffer").text($(".range-slider__max").val());
      $(".range-slider__max").width($(".range-slider__max-buffer").width());
     },
       
     slide: function(event, ui){
      formatneed(".range-slider__min");
       $(".range-slider__min").val($(".range-slider_slider").slider("values",0));
       $(".range-slider__max").val($(".range-slider_slider").slider("values",1));
       formatneed(".range-slider__max");
       $(".range-slider__max-buffer").text($(".range-slider__max").val());
       $(".range-slider__max").width($(".range-slider__max-buffer").width());
       formatneed(".range-slider__min");
       $(".range-slider__min-buffer").text($(".range-slider__min").val());
       $(".range-slider__min").width($(".range-slider__min-buffer").width());
      
     }
   });

   $(".range-slider__min").on('change', function(){
    var value1=$(".range-slider__min").val();
    $(".range-slider__min").val(value1);
    $(".range-slider_slider").slider("values", 0, value1);
   });
 
   $(".range-slider__min").on('change', function(){
       var value1=$(".range-slider__min").val();
       var value2=$(".range-slider__max").val();
     if(parseInt(value1) > parseInt(value2)){
           value1 = value2;
           $(".range-slider__min").val(value1);
     
       
           $(".range-slider_slider").slider("values", 0, value1);
     }
    
   });
 
   $(".range-slider__max").on('change', function(){
       var value1=$(".range-slider__min").val();
       var value2=$(".range-slider__max").val();
       if (value2 > 15600) { value2 = 15600; $(".range-slider__max").val(15600)}
       if(parseInt(value1) > parseInt(value2)){
           value2 = value1;
           $(".range-slider__max").val(value2);
      
       
           $(".range-slider_slider").slider("values",1,value2);
       }
   
   });
 
  
 });