import $ from 'jquery';

window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';
import 'slick-carousel';

import "@scss/main.scss";

$(document).ready(function () {

    $('.menu__icon').click(function () {
        $('.icon-menu').toggleClass('_active');
        $('.menu__body').toggleClass('_active');
    });
});