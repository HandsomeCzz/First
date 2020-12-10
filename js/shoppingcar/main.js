import {} from '../jquery.js'
import hover from './hover.js'
import time from './time.js'





hover('#footer section.w .lr .right')
time('.footer_bottom_center .w #bo_logo .info-links a img.img2')

var user = localStorage.getItem('username');

if (user){
    $('header section>div').html(`
        <a href="../login/login.html">${user}</a>
        <span>|</span>
        <a href="../reg.html">我的订单</a>
    `);

    $('#banner .shoppingcar').css({display : 'block'})
} else {
    $('header section>div').html(`
        <a href="../login/login.html?callback=../shoppingcar/shoppingcar.html">登录</a>
        <span>|</span>
        <a href="../reg.html">注册</a>
    `); 
}

