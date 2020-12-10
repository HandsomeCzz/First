import { xiding, lunbo } from './mensuo/mensuo.js'
import { getDetail } from '../server.js'



xiding()
lunbo()



var dor = '';
var name = '';
var idCode = window.location.search.replace("?id=", "");
var data;
var res = [];
var username = localStorage.getItem('username');

if (username) {
    $('.my').html(`
        <div class='l one'></div>
        <div class='l two'>
            <ul>
                <li><a class="center" href="">${username}</a></li>
                <li class='exit'>退出登陆</li>
            </ul>
        </div>
        <span>|</span>
        <a href="">消息通知</a>
        <span>|</span>
        <a href="">我的订单</a>
    `)
} else {
    $('.my').html(`
        <a href="./login/login.html?callback=../mensuo.html?id=${idCode}">登陆</a>
        <span>|</span>
        <a href="reg.html">注册</a>
        <span>|</span>
        <a href="">消息通知</a>
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
    window.location = `./mensuo.html?id=${idCode}`
})

$('.my ul').on('mouseover', function () {
    $(this).css({ background: '#fff' }).find('.center').css({ color: '#f60' });
    $(this).animate({ height: 78 }, 0);
})

$('.my ul').on('mouseout', function () {
    $(this).css({ background: '' }).find('.center').css({ color: '#b0b0b0' });
    $(this).animate({ height: 40 }, 0);
})


getDetail().then((res) => {
    for (var i = 0; i < res.detail_list.length; i++) {
        if (res.detail_list[i].id == idCode) {
            data = res.detail_list[i];
            name = res.detail_list[i].name;
            // title
            $('#main .title').html(`<p class="w">${res.detail_list[i].name} <span class="r">用户评价</span></p>`);
            // title2
            $('#main .title2').html(`<p class="w">${res.detail_list[i].name} <span class="r">用户评价</span></p>`);

            $('#main .content .pic .tupian').html(res.detail_list[i].change.map((v, i) => {
                return `
                <img src="${v}">
                `
            }).join('')
            );

            $('#main .content .pic .xiabiao').html(res.detail_list[i].change.map((v, i) => {
                return `
                <li></li>
                `
            }).join('')
            );
            $('#main .content .pic .xiabiao li').eq(0).addClass('active');

            $('#main .content .neirong h2').html(`<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb70d73101e54b283acfcd785131227d.png"
            alt="">${res.detail_list[i].name}`);

            $('#main .content .neirong .info').html(`<span>${res.detail_list[i].infoSpan}</span>${res.detail_list[i].info}`);
            $('#main .content .neirong .info2').html(res.detail_list[i].info2);

            $('#main .content .select').eq(0).html(res.detail_list[i].select1.map((v,i)=>{
                return `
                    <li>${v}</li>
                `;
            }).join('')
            );
            $('#main .content .select').eq(1).html(res.detail_list[i].select2.map((v,i)=>{
                return `
                    <li>${v}</li>
                `;
            }).join('')
            );
            $('#main .content .select').eq(0).children().eq(0).addClass('active');
            $('#main .content .select').eq(1).children().eq(0).addClass('active');

            $('#main .content .xiaoji p').html(`${res.detail_list[i].name} ${res.detail_list[i].select1[0]} ${res.detail_list[i].select2[0]} <span class="r">${res.detail_list[i].dor}</span>`);
            $('#main .content .xiaoji div').html(`总计：${res.detail_list[i].dor}`);
            dor = `<span class="r">${res.detail_list[i].dor}</span>`;

            // $('.shop a').attr("href" , `./shoppingcar/shoppingcar.html?callback=../mensuo.html?id=${idCode}`)

            continue;
        }
    }
})

setTimeout(() => {
    $('.select li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        $('#main .content .xiaoji p').html(`${name} ${$('.select .active').eq(0).text()} ${$('.select .active').eq(1).text()} ${dor}`);
        
    })
}, 30);


// 加入购物车
$('#main .join').on('click',function(){
    
    if (!localStorage.getItem('username')){
        window.location.replace(`./login/login.html?callback=../mensuo.html?id=${idCode}`)
    }

    var code = localStorage.getItem(username + idCode + `${name} ${$('.select .active').eq(0).text()} ${$('.select .active').eq(1).text()}`);

    if (code){

        res = code.split(',');
        res[4] = Number(res[4]) + 1;
        res[5] = res[4] * res[3];

        localStorage.setItem(username + idCode + `${name} ${$('.select .active').eq(0).text()} ${$('.select .active').eq(1).text()}`, res.join());

    } else {
        res = [];
        res.push('true',data.change[0],`${name} ${$('.select .active').eq(0).text()} ${$('.select .active').eq(1).text()}`,data.dor.replace('元',''),1,data.dor.replace('元',''))
            
        localStorage.setItem(username + idCode + `${name} ${$('.select .active').eq(0).text()} ${$('.select .active').eq(1).text()}`, res.join());
    }
})


