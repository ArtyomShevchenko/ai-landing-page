import 'swiper/css/bundle';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

export const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar, Autoplay],
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
        // when window width is >= 768px
        768: {
            allowTouchMove: true,
        },
    },
});