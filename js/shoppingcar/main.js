import { } from '../jquery.js'
import hover from './hover.js'
import time from './time.js'





hover('#footer section.w .lr .right')
time('.footer_bottom_center .w #bo_logo .info-links a img.img2')


var user = localStorage.getItem('username');
var check = false;
var sum = 0;

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.length > user.length) {
        if (key.substr(0, user.length) == user) {
            check = true;
        }
    }
}

if (user) {
    $('header section>div').html(`
        <a href="../login/login.html">${user}</a>
        <span>|</span>
        <a href="../reg.html">我的订单</a>
    `);

    if (check) {
        $('#banner .shoppingcar').css({ display: 'block' })
        foo();
    }

} else {
    $('header section>div').html(`
        <a href="../login/login.html?callback=../shoppingcar/shoppingcar.html">登录</a>
        <span>|</span>
        <a href="../reg.html">注册</a>
    `);
}

$('.shoppingcar ul li .down').on('click', function () {

    var res = localStorage.getItem($(this).data('code')).split(',');


    if (res[4] == 1) {
        alert("不能小于一件");
    } else {
        res[4] = res[4] - 1;
        res[5] = res[4] * res[3];
        localStorage.setItem($(this).data('code'), res.join())
        $(this).next('input').val(res[4])

        $(this).parent().next().text(res[4] * res[3] + '元');

        if($('.shoppingcar ul li .checkd').prop("checked")){
            sum -= res[3];
            $('.footer p span').text(sum);
            
        }
    }

})

$('.shoppingcar ul li .up').on('click', function () {

    var res = localStorage.getItem($(this).data('code')).split(',');

    res[4] = Number(res[4]) + 1;
    res[5] = res[4] * res[3];

    localStorage.setItem($(this).data('code'), res.join());
    $(this).prev('input').val(Number($(this).prev('input').val()) + 1);

    $(this).parent().next().text(res[4] * res[3] + '元');
    
    if($('.shoppingcar ul li .checkd').prop("checked")){
        sum += Number(res[3]);
        $('.footer p span').text(sum);
    }
})


function foo() {
    var tmp = '';

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.length > user.length) {
            if (key.substr(0, user.length) == user) {
                var data = localStorage.getItem(key).split(',')
                tmp += `
                    <li>
                        <div class="l check">
                        <input class="checkd" data-code="${key}" type="checkbox" ${data[0] == "true" ? "checked" : ""}>
                        </div>
                        <div class="l image">
                            <img src="${data[1]}"/>
                        </div>
                        <div class="l name">
                            ${data[2]}
                        </div>
                        <div class="l price">
                            ${data[3]}元
                        </div>
                        <div class="l num">
                            <button class="down" data-code="${key}">-</button><input disabled type="text" value="${data[4]}"><button class="up" data-code="${key}">+</button>
                        </div>
                        <div class="l sum">
                            ${data[5]}元
                        </div>
                        <div class="l do">
                            <button data-code="${key}">X</button>
                        </div>
                    </li>
                `;

                if (data[0] == "true"){
                   sum += Number(data[5])
                }
            }
        }
    }
    $('#banner .shoppingcar .item ul').html(tmp);
    $('.footer p span').text(sum);
    var chk = "false";

    $('#banner .shoppingcar .checkd').each(function(){
        if ($(this).prop("checked") == false){
            chk = "";
        }
    })
    $('#banner .shoppingcar .all').prop("checked" , chk);

}



$('#banner .shoppingcar .all').on('click', function () {

    $('#banner .shoppingcar .checkd').each(function(){
        console.log($(this).prop("checked"));
        $(this).prop("checked" , $('#banner .shoppingcar .all').prop("checked"))
    })
    sum = 0;

    if ($('#banner .shoppingcar .all').prop("checked")) {

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.length > user.length) {
                if (key.substr(0, user.length) == user) {
                    var data = localStorage.getItem(key).split(',')
                    if (data[0]){
                       sum += Number(data[5])
                    }
                    data[0] = "true";
                    localStorage.setItem(key,data.join())
                }
            }
        }
        
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.length > user.length) {
                if (key.substr(0, user.length) == user) {
                    var data = localStorage.getItem(key).split(',')
                    data[0] = "false";
                    localStorage.setItem(key,data.join())
                }
            }
        }
    }
    
    $('.footer p span').text(sum);

})


$('#banner .shoppingcar .checkd').on('click',function(){
    var res = localStorage.getItem($(this).data("code")).split(",");
    var chk = "false";

    $('#banner .shoppingcar .checkd').each(function(){
        if ($(this).prop("checked") == false){
            chk = "";
        }
    })
    $('#banner .shoppingcar .all').prop("checked" , chk);

    if (res[0] == "true"){
        sum -= res[5];
        res[0] = false;
    } else {
        sum += Number(res[5]);
        res[0] = true;
    }
    $('.footer p span').text(sum);

    localStorage.setItem($(this).data("code"), res.join())
    console.log(localStorage.getItem($(this).data("code")).split(","));
})



$('#banner .shoppingcar .do button').on('click',function(){
    var res = localStorage.getItem($(this).data("code")).split(",");

    sum -= Number(res[5]);
    $('.footer p span').text(sum);

    localStorage.removeItem($(this).data("code"))

    $(this).parents('li').remove();

})


