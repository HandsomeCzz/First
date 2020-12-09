import { getElectric , getAi , getCollocation , getBanner} from '../server.js'
import search_menu from './search/search_menu.js';
import banner_footer from './banner/banner.js';
import lightning from './lightning/lightning.js';
import change from './change/change.js';
import initelectric from './init/initElectric.js';
import initAi from './init/initAi.js';
import initCollocation from './init/initCollocation.js';
<<<<<<< HEAD
import initBanner from './init/initBanner.js';
=======
import time from '../shoppingcar/time.js';
>>>>>>> 92e8849e4befd178b45438aaebd4ce0c7e515920

// search下拉菜单
search_menu();

// 小米闪购 轮播图
lightning();

// change
change();

time();

banner_footer({
    elem : '.banner_footer',
    current : 0
})

$('a').attr('target','_black')

getElectric().then((res)=>{

    initelectric(res);

});

getAi().then((res)=>{

    initAi(res);

});

getCollocation().then((res)=>{
    initCollocation(res)
})

// getBanner().then((res)=>{
//     console.log(res);
//     // initBanner(res);
// })

window.onresize  = function(){
    // console.log($(document).width());
    // console.log($('#lightning').width());
    // console.log( $('#lightning').offset().left);
    console.log();

    if ($(document).width() <= ($('#lightning').width() + $('#lightning').offset().left) + (80 + 27)){
        $('#suspension').css('display','none')
        $('#suspensionMin').css('display','block')
    } else {
        $('#suspension').css('display','block')
        $('#suspensionMin').css('display','none')
    }
}


var username = localStorage.getItem('username');
if (username){
    $('.my').html(`
        <div class='l one'></div>
        <div class='l two'>
            <ul>
                <li><a class="center" href="./html/login/login.html">${username}</a></li>
                <li class='exit'>退出登陆</li>
            </ul>
        </div>
        <span>|</span>
        <a href="#">消息通知</a>
        <span>|</span>
        <a href="./html/reg.html">我的订单</a>
    `)
} else {
    $('.my').html(`
        <a href="./html/login/login.html">登陆</a>
        <span>|</span>
        <a href="./html/reg.html">注册</a>
        <span>|</span>
        <a href="#">消息通知</a>
    `)
}

$('.exit').on('mouseover',function(){
    $(this).css({
        background : '#f5f5f5',
        color : '#f60'
    })
})
$('.exit').on('mouseout',function(){
    $(this).css({
        background : '#fff',
        color : '#b0b0b0'
    })
})
$('.exit').on('click',function(){
    localStorage.removeItem('username')
    window.location = './index.html'
})

$('.my ul').on('mouseover',function(){
    $(this).css({background : '#fff'}).find('.center').css({ color : '#f60'});
    $(this).animate({height : 78},0);
})

$('.my ul').on('mouseout',function(){
    $(this).css({background : ''}).find('.center').css({ color : '#b0b0b0'});
    $(this).animate({height : 40},0);
})
