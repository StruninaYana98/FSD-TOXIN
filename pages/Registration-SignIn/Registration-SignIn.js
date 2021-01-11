import '../../fonts/fonts.scss';
import '../../components/header/header.scss';
import './Registration-SignIn.scss';
import '../../components/logo/logo.scss'
import '../../components/buttons/buttons.scss';

import '../../components/header/header.js';
import './registration-signin__img.png';

import '../../components/footer/footer.scss';
import '../../components/footer/footer.js';

import '../../components/mixins/text-field/text-field.scss'
import '../../components/mixins/text-field/text-field.js'

import '../../cards-components/registration/registration.scss'
import '../../cards-components/enter/enter.scss'
import '../../components/toggle/toggle.scss'
import '../../components/radio-buttons/radio-buttons.scss'

$(document).ready(function () {
    $("button[name*='registration-button'").on("click", function () {
        $(this).parents('.registration-signin').find('.registration-signin__registration').addClass("registration-signin__registration_active");
        $(this).parents('.registration-signin').find('.registration-signin__enter ').removeClass("registration-signin__enter_active");

    });
    $("button[name*='signin-button'").on("click", function () {
        $(this).parents('.registration-signin').find('.registration-signin__enter').addClass("registration-signin__enter_active");
        $(this).parents('.registration-signin').find('.registration-signin__registration').removeClass("registration-signin__registration_active");
    });
});