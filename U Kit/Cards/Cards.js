import '../../fonts/fonts.scss';
import './Cards.scss'
import '../../components/logo/logo.scss'
import '../../components/logo/logo.js'
import '../../components/mixins/text-field/text-field.scss'
import '../../components/mixins/text-field/text-field.js'
import '../../components/radio-buttons/radio-buttons.scss'
import '../../components/buttons/buttons.scss'
import '../../components/rate-buttons/rate-buttons.js'
import '../../components/rate-buttons/rate-buttons.scss'
import '../../components/toggle/toggle.scss'
import '../../components/calendar/calendar.js'
import '../../components/calendar/calendar.scss'
import '../../components/date-dropdown/date-dropdown.js'
import '../../components/date-dropdown/date-dropdown.scss'
import '../../components/dropdown/option/option.scss'
import '../../components/dropdown/option/option.js'
import '../../components/dropdown/guests-dropdown/guests-dropdown.scss'
import '../../components/dropdown/guests-dropdown/guests-dropdown.js'


import '../../cards-components/room-search/room-search.scss'
import '../../cards-components/registration/registration.scss'
import '../../cards-components/enter/enter.scss'
import '../../cards-components/room-card/room-card.scss'

import '../../cards-components/room/room.scss'
import '../../cards-components/room/room.js'

import '../../cards-components/room-card/room-card.js'

for (let i = 0; i <  $('.cards__calendar').length; i++){
 
    $('.cards__calendar:eq('+i+')').find('.calendar__datepicker').data('datepicker').selectDate([new Date(2019,7,19), new Date(2019,7,23)]);
    }