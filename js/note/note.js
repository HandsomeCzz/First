

import { } from '../jquery.js';
window.onload = setTimeout(function () {
    window.scrollTo(0, 130);  //修改baidu500为指zhi定dao高zhuan度shu
}, 50);

function off(n) {
    if (window.onscroll = $(n)) {
        $(n).animate({
            opacity: 1,
            marginTop: $(n).css('marginTop').replace('px', '') - 50
        }, 1000).next().animate({
            opacity: 1,
            marginTop: $(n).next().css('marginTop').replace('px', '') - 50
        }, 1500).next().animate({
            opacity: 1,
            marginTop: $(n).next().next().css('marginTop').replace('px', '') - 50
        }, 1800)
    } else {

    }
};

off('.big1 img');



// var big6t = $('.big6 h3').offset().top
// window.onscroll = function () {
//     var b = window.innerHeight;
//     var c = document.documentElement.scrollTop
//     if (b + c > 1300) {
//         var big2 = new change($('.big2 p'));
//         console.log(111);
//         big2;

//     }
// }
// function change(n) {
//     var a = n.offset().top;
//     let n1 = n.animate({
//         opacity: 1,
//         marginTop: n.css('marginTop').replace('px', '') - 50
//     }, 1300)
  
//     let n2 = n.next().length ? n1.animate({
//         opacity: 1,
//         marginTop: n.next().length ? n.next().css('marginTop').replace('px', '') - 20 : 0
//     }, 1500) : null
//     let n3 = n.next().length ? n2.animate({
//         opacity: 1,
//         marginTop: n.next().next().css('marginTop').replace('px', '') - 50
//     }, 1800) : null
  
// }


