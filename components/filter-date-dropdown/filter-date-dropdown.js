$('.filter-date-dropdown').find('.calendar__datepicker').datepicker({
    dateFormat: "dd M",
    onSelect: function(fd, d, picker) {
        $('.calendar__apply').on('click', function() { 
         
        if ((d).length == 1) {
          $(this).parents('.filter-date-dropdown').find(".filter-date-dropdown__input").val(fd + ' - ');
          
        } else if (fd=='') {
          $(this).parents('.filter-date-dropdown').find(".filter-date-dropdown__input").val('выберите период проживания');
        } else {
        $(this).parents('.filter-date-dropdown').find(".filter-date-dropdown__input").val(fd.split(",")[0] + ' - ' + fd.split(",")[1]);
        }
        })
      },
});

for (let i = 0; i <  $('.filter-date-dropdown').length; i++){
$('.filter-date-dropdown:eq('+ i + ')').find('.calendar__datepicker').data('datepicker').selectDate([new Date(2019,7,19), new Date(2019,7,23)]);
var dates = $('.filter-date-dropdown').find('.calendar__datepicker').data('datepicker').selectedDates;

var monthNames = [
    "янв", "фев", "мар",
    "апр", "май", "июн", "июл",
    "авг", "сен", "окт",
    "ноя", "дек"
  ];
$(".filter-date-dropdown__input").val(dates[0].getDate()+' '+ monthNames[dates[0].getMonth()] +' - '+dates[1].getDate() +' '+ monthNames[dates[1].getMonth()]);
}
$('.calendar__clear').on('click', function() { 
    $(this).parents('.filter-date-dropdown').find(".filter-date-dropdown__input").val("...");
  });

  $('.filter-date-dropdown__button').on('click', function(){
    $(this).parents('.filter-date-dropdown').find('.filter-date-dropdown__calendar').toggleClass('filter-date-dropdown__calendar_hidden');
 });