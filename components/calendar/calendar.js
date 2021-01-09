import 'air-datepicker/dist/js/datepicker';
var start = new Date(2019,7,8);

$('.calendar__datepicker').datepicker({

    startDate: start,
    minDate: start,
    disableNavWhenOutOfRange: false,
    range: true,
    prevHtml: `<div class="calendar__arrow-back"></div>`,
    nextHtml: `<div class="calendar__arrow-forward"></div>`,
    navTitles: {
        days: "<h2>MM <span> yyyy</h2>",
      },
      
      onRenderCell: function(date, cellType) {
        if (date.getDate()==start.getDate() && date.getMonth()==start.getMonth() && date.getYear()==start.getYear()) {
            return {
              classes:'calendar__start-day'
            };
          }
      }
    
});

$('.calendar__clear').on('click', function() { 
  $(this).parents('.calendar__buttons').siblings('.calendar__datepicker').data('datepicker').clear()
});

