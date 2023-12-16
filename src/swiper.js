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
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});