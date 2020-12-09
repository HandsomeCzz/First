import { getElectric , getAi , getCollocation} from '../server.js'
import search_menu from './search/search_menu.js';
import banner_footer from './banner/banner.js';
import lightning from './lightning/lightning.js';
import change from './change/change.js';
import initelectric from './init/initElectric.js';
import initAi from './init/initAi.js';
import initCollocation from './init/initCollocation.js';

// search下拉菜单
search_menu();

// 小米闪购 轮播图
lightning();

// change
change();

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
        <div class='l'>
            <a class="center" href="./html/login/login.html">${username}
            </a>
            <ul>
                <li>退出登陆</li>
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

