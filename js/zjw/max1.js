import { xiding, lunbo } from './mensuo/mensuo.js'
import { getDetail } from '../server.js'



xiding()
lunbo()





getDetail().then((res) => {
    var idCode = window.location.search.replace("?id=", "");
    for (var i = 0; i < res.detail_list.length; i++) {
        if (res.detail_list[i].id == idCode) {

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

            $('#main .content .xiaoji p').html(`${res.detail_list[i].name}<span class="r">${res.detail_list[i].dor}</span>`)
            $('#main .content .xiaoji div').html(`总计：${res.detail_list[i].dor}`)
        }
    }
})

setTimeout(() => {
    $('.select li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
}, 30);



