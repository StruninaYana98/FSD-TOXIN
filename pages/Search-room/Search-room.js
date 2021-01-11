import '../../fonts/fonts.scss';
import '../../components/header/header.scss';
import './Search-room.scss';
import '../../components/logo/logo.scss'
import '../../components/buttons/buttons.scss';
import '../../components/calendar/calendar.js';
import '../../components/calendar/calendar.scss';
import '../../components/header/header.js';
import '../../components/filter-date-dropdown/filter-date-dropdown.js';
import '../../components/filter-date-dropdown/filter-date-dropdown.scss';


import '../../components/mixins/text-field/text-field.scss';
import '../../components/mixins/text-field/text-field.js';

import '../../components/dropdown/option/option.scss';
import '../../components/dropdown/option/option.js';


import '../../components/dropdown/guests-dropdown/guests-dropdown.scss';
import '../../components/dropdown/guests-dropdown/guests-dropdown.js';


import '../../components/range-slider/range-slider.js'
import '../../components/range-slider/range-slider.scss'

import '../../components/checkbox/checkbox-buttons/checkbox-buttons.scss'
import '../../components/checkbox/rich-checkbox/rich-checkbox.scss'

import '../../components/dropdown/room-dropdown/room-dropdown.scss'
import '../../components/dropdown/room-dropdown/room-dropdown.js'

import '../../cards-components/room/room.scss'
import '../../cards-components/room/room.js'

import '../../components/rate-buttons/rate-buttons.js'
import '../../components/rate-buttons/rate-buttons.scss'
import '../../components/checkbox/expandable-checkbox/expandable-checkbox.scss'
import '../../components/checkbox/expandable-checkbox/expandable-checkbox.js'
import '../../components/footer/footer.scss';
import '../../components/footer/footer.js';

import '../../components/pagination/pagination.js'
import '../../components/pagination/pagination.scss'


$(document).ready(function () {
    $(".search-room__filter-toggle").on("click", function () {
        $(this).parents('.search-room__filter').toggleClass("search-room__filter_opened");
        $(this).toggleClass("search-room__filter-toggle_opened");
       
    });
   
});