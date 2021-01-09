import 'jquery-mask-plugin'
$('.date-dropdown').find('.calendar__datepicker').data('datepicker').clear()
$('.date-dropdown').find('.calendar__datepicker').datepicker({

      onSelect: function(fd, d, picker) {
        $('.calendar__apply').on('click', function() { 
           
        $(this).parents('.date-dropdown').find(".date-dropdown__range-from").val(fd.split(",")[0]);
        $(this).parents('.date-dropdown').find(".date-dropdown__range-to").val(fd.split(",")[1]);
        })
      },
});
$('.calendar__clear').on('click', function() { 
    $(this).parents('.date-dropdown').find(".date-dropdown__range-from").val("");
    $(this).parents('.date-dropdown').find(".date-dropdown__range-to").val("");
  });
$('.date-dropdown__arrow').on('click', function(){
   $(this).parents('.date-dropdown').find('.date-dropdown__calendar').toggleClass('date-dropdown__calendar_hidden');
});

$(".date-dropdown__range-from").mask('00.00.0000');
$(".date-dropdown__range-to").mask('00.00.0000');

for (let i = 0; i <  $('.date-dropdown').length; i++) {
var departure = $('.date-dropdown__range-to:eq('+i+')').val();
if (departure[0]=='0') {
    var dD = departure[1];
    }
    else {
    var dD = departure[0]+departure[1];
    };
if (departure[3]=='0') {
    var dM = departure[4]-1;
    }
    else {
    var dM = (departure[3]+departure[4])-1;
    };
var dY = departure[6]+departure[7]+departure[8]+departure[9];
var departureDay = new Date(dY, dM, dD);

var arrival = $('.date-dropdown__range-from:eq('+i+')').val();
if (arrival[0]=='0') {
    var aD = arrival[1];
    }
    else {
    var aD = arrival[0]+arrival[1];
    };
if (arrival[3]=='0') {
    var aM = arrival[4]-1;
    }
    else {
    var aM = (arrival[3]+arrival[4])-1;
    };
var aY = arrival[6]+arrival[7]+arrival[8]+arrival[9];
var arrivalDay = new Date(aY, aM, aD);

if ((departure != '') && (arrival != '')){
    $('.date-dropdown:eq('+i+')').find('.calendar__datepicker').data('datepicker').selectDate([arrivalDay,departureDay]);
} else if (departure != '') {
    $('.date-dropdown:eq('+i+')').find('.calendar__datepicker').data('datepicker').selectDate(departureDay);
}
else if (arrival !='') {
    $('.date-dropdown:eq('+i+')').find('.calendar__datepicker').data('datepicker').selectDate(arrivalDay);
}

};
$(".date-dropdown__range-to").on('change', function(){
    $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').clear();

    var departure='';
    var departureDay = '';
    var arrival = '';
    var arrivalDay = '';
    departure = $(this).val();

    if (departure[0]=='0') {
        var dD = departure[1];
        }
        else {
        var dD = departure[0]+departure[1];
        };
    if (departure[3]=='0') {
        var dM = departure[4]-1;
        }
        else {
        var dM = (departure[3]+departure[4])-1;
        };
    var dY = departure[6]+departure[7]+departure[8]+departure[9];
    departureDay = new Date(dY, dM, dD);

    arrival = $(this).parents('.date-dropdown').find('.date-dropdown__range-from').val();
   
    if (arrival[0]=='0') {
        var aD = arrival[1];
        }
        else {
        var aD = arrival[0]+arrival[1];
        };
    if (arrival[3]=='0') {
        var aM = arrival[4]-1;
        }
        else {
        var aM = (arrival[3]+arrival[4])-1;
        };
    var aY = arrival[6]+arrival[7]+arrival[8]+arrival[9];
    arrivalDay = new Date(aY, aM, aD);

    if ((departure != '') && (arrival != '') && (arrivalDay < departureDay)){
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate([arrivalDay,departureDay]);

    } else if ((departure != '') && (arrival =='')) {
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate(departureDay);
    }
    else if ((arrival !='') && (departure == '')) {
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate(arrivalDay);
    }
});
$(".date-dropdown__range-from").on('change', function(){
    $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').clear();
    var departure='';
    var departureDay = '';
    var arrival = '';
    var arrivalDay = '';

    arrival = $(this).val();
   
    if (arrival[0]=='0') {
        var aD = arrival[1];
        }
        else {
        var aD = arrival[0]+arrival[1];
        };
    if (arrival[3]=='0') {
        var aM = arrival[4]-1;
        }
        else {
        var aM = (arrival[3]+arrival[4])-1;
        };
    var aY = arrival[6]+arrival[7]+arrival[8]+arrival[9];
    arrivalDay = new Date(aY, aM, aD);
    
     departure = $(this).parents('.date-dropdown').find('.date-dropdown__range-to').val();
     
     if (departure[0]=='0') {
        var dD = departure[1];
        }
        else {
        var dD = departure[0]+departure[1];
        };
    if (departure[3]=='0') {
        var dM = departure[4]-1;
        }
        else {
        var dM = (departure[3]+departure[4])-1;
        };
    var dY = departure[6]+departure[7]+departure[8]+departure[9];
    departureDay = new Date(dY, dM, dD);

    if ((departure != '') && (arrival != '') && (arrivalDay < departureDay)){
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate([arrivalDay,departureDay]);
    
    } else if ((departure != '') && (arrival =='')) {
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate(departureDay);

    }  else if ((arrival !='') && (departure == '')) {
        $(this).parents('.date-dropdown').find('.calendar__datepicker').data('datepicker').selectDate(arrivalDay);
    }
});
