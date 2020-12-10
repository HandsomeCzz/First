import { getElectric, getAi, getCollocation, getBanner } from '../server.js'
import search_menu from './search/search_menu.js';
import banner_footer from './banner/banner.js';
import lightning from './lightning/lightning.js';
import change from './change/change.js';
import initelectric from './init/initElectric.js';
import initAi from './init/initAi.js';
import initCollocation from './init/initCollocation.js';
import time from '../shoppingcar/time.js';

// search下拉菜单
search_menu();

// 小米闪购 轮播图
lightning();

// change
change();

// footer 跳动的心
time();

banner_footer({
    elem: '.banner_footer',
    current: 0
})

$('a').attr('target', '_black')

getElectric().then((res) => {

    initelectric(res);

});

getAi().then((res) => {

    initAi(res);

});

getCollocation().then((res) => {
    console.log(res);
    initCollocation(res)
})


for (var i = 1; i <= 10; i++) {
    getBanner('banner_list' + i).then((res) => {
        var tmp = '';
        for(var j = 0; j < res.banner_list.length ; j++){
            var str = '';
            for(var lsIndex = 0 ; lsIndex < res.banner_list[j].length ; lsIndex++){
                str += `
                    <li>
                        <a href="/First/html/mensuo.html?id=${res.banner_list[j][lsIndex]['id']}" target="_black">
                            <img class="l" src="${res.banner_list[j][lsIndex].imgUrl}"/>
                            <span class="l">${res.banner_list[j][lsIndex].spanText}</span>
                        </a>
                    </li>
                `;
            }

            tmp += '<ul class="l">' + str + '</ul>';
        }

        $('#banner .item').eq(res.code).html(tmp);
        
        // console.log(tmp);

    })
}

// getBanner('banner_list' + 1).then((res)=>{
//     console.log(res);
// })

window.onresize = function () {
    // console.log($(document).width());
    // console.log($('#lightning').width());
    // console.log( $('#lightning').offset().left);
    console.log();

    if ($(document).width() <= ($('#lightning').width() + $('#lightning').offset().left) + (80 + 27)) {
        $('#suspension').css('display', 'none')
        $('#suspensionMin').css('display', 'block')
    } else {
        $('#suspension').css('display', 'block')
        $('#suspensionMin').css('display', 'none')
    }
}


var username = localStorage.getItem('username');
if (username) {
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

$('.exit').on('mouseover', function () {
    $(this).css({
        background: '#f5f5f5',
        color: '#f60'
    })
})
$('.exit').on('mouseout', function () {
    $(this).css({
        background: '#fff',
        color: '#b0b0b0'
    })
})
$('.exit').on('click', function () {
    localStorage.removeItem('username')
    window.location = './index.html'
})

$('.my ul').on('mouseover', function () {
    $(this).css({ background: '#fff' }).find('.center').css({ color: '#f60' });
    $(this).animate({ height: 78 }, 0);
})

$('.my ul').on('mouseout', function () {
    $(this).css({ background: '' }).find('.center').css({ color: '#b0b0b0' });
    $(this).animate({ height: 40 }, 0);
})



